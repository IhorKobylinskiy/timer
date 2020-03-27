import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../../store/state/app.state';
import { PlayTimer, PauseTimer } from '../../store/actions/timer.actions';

import { selectTimerStatus, selectTimerValue } from '../../store/selectors/timer.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  status$ = this._store.pipe(select(selectTimerStatus));
  value$ = this._store.pipe(select(selectTimerValue));
  status;
  statusSubscription;
  constructor(private _store: Store<IAppState>) {
    this.statusSubscription = this.status$.subscribe((s)=>{
      this.status = s;
    })
  }
  ngOnInit(): void {
  	
  }

  setPlay(){
	  this._store.dispatch(new PlayTimer());
  }

  setPause(){
	  this._store.dispatch(new PauseTimer());
  }

  ngOnDestroy(){
  	this.statusSubscription.unsubscribe();
  }

}
