import { NgClass } from '@angular/common';
import { Component, effect, input, output } from '@angular/core';


@Component({
  selector: 'app-component1',
  imports: [NgClass],
  standalone: true,
  templateUrl: './component1.html',
  styleUrl: './component1.scss'
})
export class Component1 {
  letter = input<string>('');
  selectedLetterEvent = output<string>();
  isActiveBorder = false;
  activeLetter = input<string>();

  constructor () {
    effect(() => this.selectedLetterChange()) 
  }

  onSelectedLetter() {
    this.selectedLetterEvent.emit(this.letter());
    this.isActiveBorder = true;
  }

  selectedLetterChange (): void {
    if (this.activeLetter() === this.letter()) {
      this.isActiveBorder = true;
    } else { this.isActiveBorder = false;}
  }
}
