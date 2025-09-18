import { Component } from '@angular/core';
import { Component4 } from './components/component4/component4';

@Component({
  selector: 'app-exo2',
  imports: [Component4],
  standalone: true,
  templateUrl: './exo2.html',
  styleUrl: './exo2.scss'
})
export class Exo2 {

}
