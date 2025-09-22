import { Blacksquare } from './components/black-square/black-square';
import { Component } from '@angular/core';
import { Checkbox } from './components/checkbox/checkbox';

@Component({
  selector: 'app-exo1',
  imports: [Blacksquare, Checkbox],
  templateUrl: './exo1.html',
  styleUrl: './exo1.scss'
})
export class Exo1 {
  isChecked = false;

  onCheckboxUpdate(value: boolean): void {
    this.isChecked = value;
  }
}
