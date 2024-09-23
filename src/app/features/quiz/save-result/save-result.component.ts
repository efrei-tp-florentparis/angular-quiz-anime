import { Component, Input } from '@angular/core';
import { SaveResultService } from './save-result.service';

@Component({
  selector: 'app-save-result',
  templateUrl: './save-result.component.html',
  styleUrls: ['./save-result.component.scss'],
})
export class SaveResultComponent {
  @Input() score: number = 0; // Ajoutez cette ligne
  @Input() totalQuestions: number = 0; // Ajoutez cette ligne
  userName: string = '';

  constructor(private saveResultService: SaveResultService) {}

  saveResult(score: number, totalQuestions: number) {
    try {
      this.saveResultService.saveResult(this.userName, score, totalQuestions);
      this.userName = '';
    } catch (error: any) {
      alert(error.message);
    }
  }
}
