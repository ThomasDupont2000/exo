import { Component } from '@angular/core';
import { Component1 } from './components/component1/component1';
import { Component2 } from './components/component2/component2';

@Component({
  selector: 'app-exo31',
  imports: [Component1, Component2],
  templateUrl: './exo31.html',
  styleUrl: './exo31.scss'
})
export class Exo31 {

}
