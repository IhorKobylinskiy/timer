import { RouterReducerState } from '@ngrx/router-store';

import { ITimerState, initialTimerState } from './timer.state';


export interface IAppState {
  router?: RouterReducerState;
  timer: ITimerState;
}

export const initialAppState: IAppState = {
  timer: initialTimerState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
