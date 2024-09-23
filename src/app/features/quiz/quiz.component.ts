import { Component, OnDestroy, OnInit } from '@angular/core';
import { QuizService } from './quiz.service';
import { Subscription } from 'rxjs';
import { SaveResultService } from './save-result/save-result.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit, OnDestroy {
  questions: { question: string; reponses: object; reponse: string }[] = [];
  subscription: Subscription = new Subscription();
  answers: { [key: number]: { answered: boolean; correct: boolean } } = {};
  quizCompleted: boolean = false;
  score: number = 0;
  currentQuestionIndex: number = 0;
  objectKeys = Object.keys;
  userName: string = '';

  constructor(
    private quizService: QuizService,
    private saveResult: SaveResultService
  ) {}

  ngOnInit(): void {
    this.subscription = this.quizService.getQuestions().subscribe((data) => {
      console.log(data);
      this.quizService.setQuestions(data);
      this.questions = this.quizService.getLocalQuestions();
      this.questions.forEach((_, index) => {
        this.answers[index] = { answered: false, correct: false };
      });
    });
  }

  getQuestionIndex(): number[] {
    return this.questions.map((_, index) => index);
  }

  setCurrentQuestion(index: number): void {
    this.currentQuestionIndex = index;
  }

  getCurrentQuestion(): any {
    return this.quizService.getCurrentQuestion();
  }

  checkAnswer(answer: string) {
    const isCorrect = this.quizService.checkAnswer(answer);
    this.answers[this.quizService.getCurrentQuestionIndex()] = {
      answered: true,
      correct: isCorrect,
    };
    this.quizService.incrementCurrentQuestion();

    if (this.quizService.hasCompletedQuiz()) {
      this.quizCompleted = true;
    }
  }

  isAnswerCorrect(index: number): boolean {
    return this.answers[index]?.correct || false;
  }

  hasAnswered(index: number): boolean {
    return this.answers[index]?.answered || false;
  }

  getResults() {
    return this.quizService.getResults(this.answers);
  }

  finalizeQuiz() {
    const score = this.getResults().score;
    const totalQuestions = this.getResults().totalQuestions;

    this.saveResult.saveResult(this.userName, score, totalQuestions);
    this.quizCompleted = true;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
