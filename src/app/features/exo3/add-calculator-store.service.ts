import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AddCalculatorStoreService {
    private numberGenerated1Subject = new BehaviorSubject<number>(0);
    private numberGenerated2Subject = new BehaviorSubject<number>(0);

    getNumberSubjectObs1(): Observable<number>{
        return this.numberGenerated1Subject.asObservable();
    }
    getNumberSubjectObs2(): Observable<number>{
        return this.numberGenerated2Subject.asObservable();
    }

    changeNumber1(newNumber: number):void {
        this.numberGenerated1Subject.next(newNumber);
    }
    changeNumber2(newNumber: number):void {
        this.numberGenerated2Subject.next(newNumber);
    }
}