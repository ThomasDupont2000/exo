import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Component2 } from '../component2/component2';
import { Component3 } from '../component3/component3';

@Component({
  selector: 'app-component4',
  imports: [CommonModule, Component2, Component3],
  templateUrl: './component4.html',
  styleUrl: './component4.scss'
})
export class Component4 {

}
