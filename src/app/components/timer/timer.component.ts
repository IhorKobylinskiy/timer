import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { TimerValue } from '../../pages/home/home.component';
import { fromEvent, interval, merge, of, range, BehaviorSubject, Subject, Observable } from 'rxjs';
import { mapTo, scan, switchMap, takeUntil, concatMap, delay, mergeMap, tap, skipWhile, map } from 'rxjs/operators';

/*export interface timerData{
	//startValue: RegExp = /^([0-6]\d):([0-6]\d)$/g,
	startValue: {minutes: number, seconds: number},
	status: timerStatus
}*/


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
	//@Input() startValue: RegExp = /^([0-6]\d):([0-6]\d)$/g
	@Input() 
	timerValue: TimerValue;


	@Input() 
	timerStatus: Observable<String>;

	initialValue$ = new BehaviorSubject(70).asObservable();
	intervalObs$;

	constructor() {

	}
	
	ngOnInit(): void {
		this.initialValue$.subscribe((status) =>{
			console.log(status);
		})
		const zero$ = new Subject();
		this.intervalObs$ = merge(this.initialValue$, this.timerStatus, zero$).pipe(
	      switchMap(isCounting => {
	      	console.log(isCounting);
	      	if(isCounting == 70) return of(70);
	        if (isCounting === 'reset') return of(null);
	        return isCounting=='play' ? interval(1000) : of();
	      }),
	      scan((accumulatedValue, currentValue) => {
	      	console.log(accumulatedValue, currentValue);
	        if (accumulatedValue === 0 && currentValue !== null) {
	          //zero$.next(null);
	          return accumulatedValue;
	        }
	        if (currentValue === null || !accumulatedValue) return 70;
	        return --accumulatedValue;
	      })
	    );
	}

	ngAfterViewInit(){
		console.log(this.intervalObs$)
	}

	ngOnDestroy(){
  		//this.timerStatus.
  	}

}
