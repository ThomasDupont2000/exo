import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AddCalculatorStoreService {
    private numberGeneratedSubject = new BehaviorSubject<object: <any>>({});
    
    getNumberSubjectObs(): Observable<object>{
        return this.numberGeneratedSubject.asObservable();
    }

    getNumberValue():object {
        return this.numberGeneratedSubject.getValue();
    }

    changeNumber(newNumber: object):void {
        this.numberGeneratedSubject.next(newNumber);
    }
}