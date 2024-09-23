import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickQuestionCardComponent } from './quiz/pick-question-card/pick-question-card.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { QuizComponent } from './quiz/quiz.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AnswerComponent } from './quiz/answer/answer.component';
import { QuestionComponent } from './quiz/question/question.component';
import { ResultComponent } from './result/result.component';
import { SaveResultComponent } from './quiz/save-result/save-result.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    PickQuestionCardComponent,
    QuizComponent,
    AnswerComponent,
    QuestionComponent,
    ResultComponent,
    SaveResultComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    FormsModule,
  ],
  exports: [HomeComponent],
})
export class FeaturesModule {}
