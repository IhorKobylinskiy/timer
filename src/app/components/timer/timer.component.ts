import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { interval, merge, of, Observable, BehaviorSubject } from 'rxjs';
import { scan, switchMap} from 'rxjs/operators';
import { ETimerStatuses } from '../../models/timer.interfaces';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
	@Output() 
	onValueChanged = new EventEmitter<Observable<Number>>();

	@Output() 
	onFinish = new EventEmitter<Observable<boolean>>();
	
	@Input() 
	initialValue: Number;

	@Input() 
	status: Observable<ETimerStatuses>;

	intervalObs$;

	value$;
	valueObs$: Observable<number>;

	constructor() {
		
	}
	
	ngOnInit(): void {
		this.value$ = new BehaviorSubject(this.initialValue);
		this.valueObs$ = this.value$.asObservable();

		this.onValueChanged.emit(this.valueObs$);
		this.intervalObs$ = merge(this.status, of(this.initialValue)).pipe(
	      switchMap(isCounting => {
	      	switch (isCounting) {
	      		case this.initialValue:
	      			return of(this.initialValue);
	      			break;
	      		case ETimerStatuses.reset:
	      			return of(null);
	      			break;
	      		case ETimerStatuses.playing:
	      			return interval(1000);
	      			break;	
	      		default:
	      			return of();
	      			break;
	      	}
	      }),
	      scan((accumulatedValue: number, currentValue: number) => {
	        if (accumulatedValue === 0 && currentValue !== null) {
	        	return accumulatedValue;
	        }
	        if (currentValue === null || !accumulatedValue) {
	        	return this.initialValue;
	        }
	        let newVal = --accumulatedValue;
	        
	        this.value$.next(newVal);

	        if (newVal == 0) this.onFinish.emit();
	        return newVal;
	      })
	    );
	}

	ngAfterViewInit(){
		
	}

	ngOnDestroy(){
  		
  	}

}
