import { Component, inject, input } from '@angular/core';
import { AddCalculatorStoreService } from '../../add-calculator-store.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.html',
  styleUrl: './component2.scss'
})
export class Component2 {
  private readonly addCalculatorStoreService = inject(AddCalculatorStoreService);

  readonly key = input<string>();

  numberGenerated?: number;
  
  onGenerateNumber():void {
    this.numberGenerated = Math.floor(100 * Math.random());

    if (this.key() === 'number1') {

      const key1 = this.addCalculatorStoreService.getNumberValue();
      key1.number1 = this.numberGenerated
      this.addCalculatorStoreService.changeNumber(key1);

    } else if (this.key() === 'number2') {

      const key2 = this.addCalculatorStoreService.getNumberValue();
      key2.number2 = this.numberGenerated
      this.addCalculatorStoreService.changeNumber(key2);
    }
  }
}
