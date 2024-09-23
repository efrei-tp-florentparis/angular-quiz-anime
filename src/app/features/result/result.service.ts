import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResultService {
  private storageKey = 'quizResults';

  getResultsFromStorage() {
    const results = localStorage.getItem(this.storageKey);
    return results ? JSON.parse(results) : [];
  }
}
