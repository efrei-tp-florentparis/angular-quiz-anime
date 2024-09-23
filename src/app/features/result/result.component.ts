import { Component } from '@angular/core';
import { ResultService } from './result.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent {
  results: any[] = [];

  constructor(private resultsStorageService: ResultService) {}

  ngOnInit() {
    this.results = this.resultsStorageService.getResultsFromStorage();
  }
}
