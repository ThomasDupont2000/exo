import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NumberGenerated } from './interfaces/number-generated';

@Injectable({
  providedIn: 'root'
})

export class AddCalculatorStoreService {
    private numberGeneratedSubject = new BehaviorSubject<NumberGenerated>({} as NumberGenerated);
    
    getNumberSubjectObs(): Observable<NumberGenerated>{
        return this.numberGeneratedSubject.asObservable();
    }

    getNumberValue():NumberGenerated {
        return this.numberGeneratedSubject.getValue();
    }

    changeNumber(newNumber: NumberGenerated):void {
        this.numberGeneratedSubject.next(newNumber);
    }
}