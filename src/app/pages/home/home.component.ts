import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { ETimerStatuses } from '../../models/timer.interfaces';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  initialValue = 70
  status = new BehaviorSubject('paused');
  buttonStatus;
  value = this.initialValue*(100/this.initialValue);
  valueSubscription;
  statusSubscription;
  
  constructor() {
    this.statusSubscription = this.status.subscribe((val: ETimerStatuses) =>{
      this.buttonStatus = val;
    })
  }

  onChanged(value){
    this.valueSubscription = value.subscribe((val: number) =>{
      this.value = val*(100/this.initialValue);
    })
  }

  setFinish(){
    this.status.next(ETimerStatuses.finish);
  }

  ngOnInit(): void {
  	
  }

  setPlay(){
	  this.status.next(ETimerStatuses.playing);
  }

  setPause(){
	  this.status.next(ETimerStatuses.paused);
  }

  setReset(){
    this.status.next(ETimerStatuses.reset);
  }


  ngOnDestroy(){
  	this.valueSubscription.unsubscribe();
    this.statusSubscription.unsubscribe();
  }
 

}
