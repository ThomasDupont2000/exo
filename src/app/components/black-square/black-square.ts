import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Greensquare } from '../green-square/green-square';
import { Redsquare } from '../red-square/red-square';

@Component({
  selector: 'app-black-square',
  imports: [CommonModule, Greensquare, Redsquare],
  templateUrl: './black-square.html',
  styleUrl: './black-square.scss'
})
export class Blacksquare {
  @Input() checked = false;
}
