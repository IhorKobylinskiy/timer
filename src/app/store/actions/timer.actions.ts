import { Action } from '@ngrx/store';

export enum ETimerActions {
  PlayTimer = '[Timer] Play Timer',
  PauseTimer = '[Timer] Pause Timer',
  SetTimerValue = '[Timer] Set Timer Value',
  ResetTimer = '[Timer] Reset Timer',
  FinishTimer = '[Timer] Finish Timer'
}

export class PlayTimer implements Action {
  public readonly type = ETimerActions.PlayTimer;
}

export class PauseTimer implements Action {
  public readonly type = ETimerActions.PauseTimer;
}

export class ResetTimer implements Action {
  public readonly type = ETimerActions.ResetTimer;
}

export class FinishTimer implements Action {
  public readonly type = ETimerActions.FinishTimer;
}

export class SetTimerValue implements Action {
  public readonly type = ETimerActions.SetTimerValue;
  constructor(public payload: number) {}
}

export type TimerActions = PlayTimer | PauseTimer | ResetTimer | FinishTimer | SetTimerValue;
