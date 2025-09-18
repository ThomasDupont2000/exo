import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Component1 } from '../component1/component1';
import { LetterIndexStoreService } from '../../letter-index-store.service';


@Component({
  selector: 'app-component2',
  imports: [CommonModule, Component1],
  standalone: true,
  templateUrl: './component2.html',
  styleUrl: './component2.scss'
})

export class Component2 {
  private readonly letterIndexStoreService = inject(LetterIndexStoreService)

  readonly letters = ['A', 'B', 'C', 'D'];
  selectedLetter?: string;

  onSelectedLetter(value: string):void {
    this.selectedLetter = value;
    this.letterIndexStoreService.changeLetter(value);
  }
}
