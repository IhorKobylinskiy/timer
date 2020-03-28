import { ETimerActions } from './../actions/timer.actions';
import { TimerActions } from '../actions/timer.actions';
import { initialTimerState, ITimerState } from '../state/timer.state';
import { ETimerStatuses } from '../state/timer.state';


export const timerReducers = (
  state = initialTimerState,
  action: TimerActions
): ITimerState => {
  switch (action.type) {
    case ETimerActions.PlayTimer: {
      return {
        ...state,
        status: ETimerStatuses.playing
      };
    }
    case ETimerActions.PauseTimer: {
      return {
        ...state,
        status: ETimerStatuses.paused
      };
    }
    case ETimerActions.ResetTimer: {
      return {
        ...initialTimerState,
        status: ETimerStatuses.reset
      };
    }
    case ETimerActions.SetTimerValue: {
      return {
        ...state,
        value: action.payload
      };
    }
    case ETimerActions.FinishTimer: {
      return {
        ...state,
        status: ETimerStatuses.finish
      };
    }

    default:
      return state;
  }
};
