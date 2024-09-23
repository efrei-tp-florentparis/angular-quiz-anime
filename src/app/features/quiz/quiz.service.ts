import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private questionResponseURL = 'http://localhost:3000/questions_reponses';
  private questions: any[] = [];
  private currentQuestionIndex: number = 0;
  private score: number = 0;

  constructor(private http: HttpClient) {}

  getQuestions(): Observable<any> {
    return this.http.get<any>(this.questionResponseURL);
  }

  setQuestions(questions: any[]): void {
    this.questions = questions;
  }

  getLocalQuestions(): any[] {
    return this.questions;
  }

  getCurrentQuestion(): any {
    return this.questions[this.currentQuestionIndex];
  }

  incrementCurrentQuestion(): void {
    this.currentQuestionIndex++;
  }

  hasCompletedQuiz(): boolean {
    return this.currentQuestionIndex >= this.questions.length;
  }

  checkAnswer(answer: string): boolean {
    const correctAnswer =
      this.questions[this.currentQuestionIndex].reponse === answer;
    if (correctAnswer) {
      this.incrementScore();
    }
    return correctAnswer;
  }

  getCurrentQuestionIndex(): number {
    return this.currentQuestionIndex;
  }

  resetQuiz(): void {
    this.currentQuestionIndex = 0;
    this.score = 0;
  }

  getScore(): number {
    return this.score;
  }

  private incrementScore(): void {
    this.score++;
  }

  getResults(answers: {
    [key: number]: { answered: boolean; correct: boolean };
  }) {
    return {
      score: this.getScore(),
      totalQuestions: this.questions.length,
      correctAnswers: this.questions.filter(
        (_, index) => answers[index]?.correct
      ).length,
      incorrectAnswers: this.questions.filter(
        (_, index) => answers[index]?.answered && !answers[index]?.correct
      ).length,
      questionsWithErrors: this.questions.filter(
        (_, index) => answers[index]?.answered && !answers[index]?.correct
      ),
      questionsWithCorrectAnswers: this.questions.filter(
        (_, index) => answers[index]?.answered && answers[index]?.correct
      ),
    };
  }
}
