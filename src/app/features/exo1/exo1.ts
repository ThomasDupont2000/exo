import { Blacksquare } from '../../components/black-square/black-square';
import { Component } from '@angular/core';
import { Checkbox } from '../../components/checkbox/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-exo1',
  imports: [Blacksquare, Checkbox, MatCheckboxModule],
  templateUrl: './exo1.html',
  styleUrl: './exo1.scss'
})
export class Exo1 {
  isChecked = false;
}
