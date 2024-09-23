import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pick-question-card',
  templateUrl: './pick-question-card.component.html',
  styleUrls: ['./pick-question-card.component.scss'],
})
export class PickQuestionCardComponent {
  @Input() questionNumber: number | undefined;
  @Input() isActive: boolean = false;
  @Input() isCorrect: boolean = false;
  @Input() hasAnswered: boolean = false;
  @Output() questionSelected = new EventEmitter<number>();

  onClick(): void {
    if (this.questionNumber !== undefined) {
      this.questionSelected.emit(this.questionNumber);
    }
  }
}
