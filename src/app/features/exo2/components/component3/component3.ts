import { Component, inject } from '@angular/core';
import { LetterIndexStoreService } from '../../letter-index-store.service';

@Component({
  selector: 'app-component3',
  imports: [],
  templateUrl: './component3.html',
  styleUrl: './component3.scss'
})
export class Component3 {
  private readonly letterIndexStoreService = inject(LetterIndexStoreService);
  
  receivedLetter = '';

  constructor () {
    this.letterIndexStoreService.getLetterSubjectObs().subscribe((letter: string) => {
      this.receivedLetter = letter;
    });
  }
}
