import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent {
  @Input() question: any;
  @Input() objectKeys: any;
  @Output() answerSelected = new EventEmitter<string>();

  onAnswerSelected(key: string) {
    this.answerSelected.emit(key);
  }
}
