import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss'],
})
export class AnswerComponent {
  @Input() answerKey!: string;
  @Input() answerText!: string;
  @Output() answerSelected = new EventEmitter<string>();

  selectAnswer() {
    this.answerSelected.emit(this.answerKey);
  }
}
