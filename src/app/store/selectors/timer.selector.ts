import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { ITimerState } from '../state/timer.state';

const selectTimer = (state: IAppState) => state.timer;

export const selectTimerStatus = createSelector(
  selectTimer,
  (state: ITimerState) => state.status
);

export const selectTimerValue = createSelector(
  selectTimer,
  (state: ITimerState) => state.value 
);
