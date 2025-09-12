import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Square } from '../square/square';

@Component({
  selector: 'app-black-square',
  imports: [CommonModule, Square],
  templateUrl: './black-square.html',
  styleUrl: './black-square.scss'
})
export class Blacksquare {
  checked = input(false);
}
