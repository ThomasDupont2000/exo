import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LetterIndexStoreService {
  private letterSubject = new BehaviorSubject<string>('Aucun');

  getLetterSubjectObs(): Observable<string> {
    return this.letterSubject.asObservable();
  }

  changeLetter(newLetter: string): void {
    this.letterSubject.next(newLetter);
  }
}