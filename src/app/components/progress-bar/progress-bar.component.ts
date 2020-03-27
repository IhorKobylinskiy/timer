import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../store/state/app.state';
import { ResetTimer } from '../../store/actions/timer.actions';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
	@Input() 
	value: number;

	constructor(private _store: Store<IAppState>) {
		
	}
	
	ngOnInit(): void {
		
	}

	ngAfterViewInit(){
		
	}

	ngOnDestroy(){

  	}

  	setReset(){
  		this._store.dispatch(new ResetTimer());
  	}

}
