import { Component } from '@angular/core';
import { Greensquare } from '../green-square/green-square';
import { Redsquare } from '../red-square/red-square';

@Component({
  selector: 'app-black-square',
  imports: [Greensquare, Redsquare],
  templateUrl: './black-square.html',
  styleUrl: './black-square.scss'
})
export class Blacksquare {

}
