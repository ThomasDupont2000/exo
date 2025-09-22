import { Component, inject } from '@angular/core';
import { AddCalculatorStoreService } from '../../add-calculator-store.service';
import { AsyncPipe } from '@angular/common';
import { NumberGenerated } from '../../interfaces/number-generated';
import { map } from 'rxjs';

@Component({
  selector: 'app-component1',
  imports: [AsyncPipe],
  templateUrl: './component1.html',
  styleUrl: './component1.scss'
})
export class Component1 {
  private readonly addCalculatorStoreService = inject(AddCalculatorStoreService);

  readonly result$ = this.addCalculatorStoreService.getNumberSubjectObs().pipe(
    map((numbers: NumberGenerated) => numbers.number1 + numbers.number2));
}
