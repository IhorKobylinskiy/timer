import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { interval, merge, of, Observable } from 'rxjs';
import { scan, switchMap} from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../../store/state/app.state';
import { SetTimerValue, ResetTimer, FinishTimer } from '../../store/actions/timer.actions';
import { ETimerStatuses } from '../../store/state/timer.state';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
	@Input() 
	value: Observable<Number>;

	@Input() 
	status: Observable<String>;

	initialValue;
	intervalObs$;

	constructor(private _store: Store<IAppState>) {

	}
	
	ngOnInit(): void {
		this.initialValue = this.value;
		this.intervalObs$ = merge(of(this.value), this.status).pipe(
	      switchMap(isCounting => {
	      	switch (isCounting) {
	      		case this.value:
	      			return of(this.value);
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
	      scan((accumulatedValue, currentValue) => {
	        if (accumulatedValue === 0 && currentValue !== null) {
	        	return accumulatedValue;
	        }
	        if (currentValue === null || !accumulatedValue) {
	        	return this.initialValue;
	        }
	        let newVal = --accumulatedValue;
	        this._store.dispatch(new SetTimerValue(newVal));
	        if(newVal == 0) this._store.dispatch(new FinishTimer());
	        return newVal;
	      })
	    );
	}

	ngAfterViewInit(){
		
	}

	ngOnDestroy(){
  		
  	}

}
