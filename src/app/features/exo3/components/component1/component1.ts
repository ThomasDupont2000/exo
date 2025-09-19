import { Component, inject } from '@angular/core';
import { AddCalculatorStoreService } from '../../add-calculator-store.service';
import { AsyncPipe } from '@angular/common';
import { combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-component1',
  imports: [AsyncPipe],
  templateUrl: './component1.html',
  styleUrl: './component1.scss'
})
export class Component1 {
  private readonly addCalculatorStoreService = inject(AddCalculatorStoreService);

  readonly number1$ = this.addCalculatorStoreService.getNumberSubjectObs1();
  readonly number2$ = this.addCalculatorStoreService.getNumberSubjectObs2();

  readonly result$ = combineLatest([this.number1$, this.number2$]).pipe(
  map(([number1, number2]) => number1 + number2)
);
}
