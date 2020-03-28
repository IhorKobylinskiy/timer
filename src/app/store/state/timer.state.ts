export enum ETimerStatuses {
	playing = 'playing',
	paused = 'paused',
	reset = 'reset',
	finish = 'finish',
}

export interface ITimerState {
  status:ETimerStatuses;
  value: number;
}

export const initialTimerState: ITimerState = {
  status: ETimerStatuses.paused,
  value: 70
};
