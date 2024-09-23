import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* components */

import { HomeComponent } from './features/home/home.component';
import { QuizComponent } from './features/quiz/quiz.component';
import { ResultComponent } from './features/result/result.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'quiz',
    component: QuizComponent,
  },
  {
    path: 'score',
    component: ResultComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
