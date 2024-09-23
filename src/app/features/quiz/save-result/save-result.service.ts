import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SaveResultService {
  private storageKey = 'quizResults';

  saveResult(userName: string, score: number, totalQuestions: number) {
    if (!userName) {
      throw new Error('Nom d’utilisateur requis');
    }

    const results = this.getResultsFromStorage();
    results.push({ userName, score, totalQuestions });
    localStorage.setItem(this.storageKey, JSON.stringify(results));
  }

  getResultsFromStorage() {
    const results = localStorage.getItem(this.storageKey);
    return results ? JSON.parse(results) : [];
  }
}
