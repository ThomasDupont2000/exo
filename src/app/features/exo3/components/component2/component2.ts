import { Component, inject, input } from '@angular/core';
import { AddCalculatorStoreService } from '../../add-calculator-store.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.html',
  styleUrl: './component2.scss'
})
export class Component2 {
  private readonly addCalculatorStoreService = inject(AddCalculatorStoreService);

  readonly key = input<'number1' | 'number2'>();

  numberGenerated?: number;
  
  onGenerateNumber():void {
    this.numberGenerated = Math.floor(100 * Math.random());
    if (this.key() === 'number1') {
      this.addCalculatorStoreService.changeNumber1(this.numberGenerated);
    } else if (this.key() === 'number2') {
      this.addCalculatorStoreService.changeNumber2(this.numberGenerated);
    }
  }
}
