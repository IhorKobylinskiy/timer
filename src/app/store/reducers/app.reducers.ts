import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { IAppState } from '../state/app.state';
import { timerReducers } from './timer.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  timer: timerReducers
};
