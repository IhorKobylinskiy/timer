import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { mapTo, scan, switchMap, takeUntil, concatMap, delay, mergeMap, tap, skipWhile, map } from 'rxjs/operators';
import { fromEvent, interval, merge, of, range, BehaviorSubject, Subject, Observable } from 'rxjs';
export interface TimerValue{
	minutes: number,
	seconds: number
}

export enum TimerStatus {
    play = "play",
    reset = "reset",
    pause = "pause"
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
 
  statusSubj = new Subject<TimerStatus>();

  status$ = this.statusSubj.asObservable();

  initialTimerValue: TimerValue = {
  	minutes: 1,
  	seconds: 10
  }	

  timerStatuses = TimerStatus

  constructor() {
  }

  ngOnInit(): void {
  	/*const start$ = fromEvent(this.startBtn.nativeElement, 'click').pipe(mapTo(true));
    const pause$ = fromEvent(this.pauseBtn.nativeElement, 'click').pipe(mapTo(false));
    const reset$ = fromEvent(this.resetBtn.nativeElement, 'click').pipe(mapTo(null));*/
  }

  setStatus(status: TimerStatus){
	this.statusSubj.next(status);
  }

  ngOnDestroy(){
  	this.statusSubj.unsubscribe();
  }

}
