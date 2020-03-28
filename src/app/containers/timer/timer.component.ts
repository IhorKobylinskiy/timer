import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../../store/state/app.state';
import { selectTimerValue, selectTimerStatus } from '../../store/selectors/timer.selector';

@Component({
  selector: 'app-timer-container',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  value$ = this._store.pipe(select(selectTimerValue));
  status$ = this._store.pipe(select(selectTimerStatus));

  constructor(
    private _store: Store<IAppState>
  ) {

  }

  ngOnInit() {
  }
}
