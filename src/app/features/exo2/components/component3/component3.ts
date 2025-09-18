import { Component, inject } from '@angular/core';
import { LetterIndexStoreService } from '../../letter-index-store.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-component3',
  imports: [AsyncPipe],
  templateUrl: './component3.html',
  styleUrl: './component3.scss'
})
export class Component3 {
  private readonly letterIndexStoreService = inject(LetterIndexStoreService);
  
  readonly receivedLetter$ = this.letterIndexStoreService.getLetterSubjectObs();
}
