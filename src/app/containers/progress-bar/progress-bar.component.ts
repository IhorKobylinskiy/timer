import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { IAppState } from '../../store/state/app.state';
import { selectTimerValue } from '../../store/selectors/timer.selector';
import { initialTimerState } from '../../store/state/timer.state';


@Component({
  selector: 'app-progress-bar-container',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  value$ = this._store.pipe(select(selectTimerValue), map((val) => val*(100/initialTimerState.value)));

  constructor(private _store: Store<IAppState>) {
    
  }

  ngOnInit() {

  }

}
