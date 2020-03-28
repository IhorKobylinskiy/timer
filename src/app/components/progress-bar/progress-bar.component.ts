import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
	@Input() 
	value: number;

	@Output() 
	onReset = new EventEmitter<void>();

	constructor() {
		
	}
	
	ngOnInit(): void {
		
	}

	ngAfterViewInit(){
		
	}

	ngOnDestroy(){

  	}

  	setReset(){
  		this.onReset.emit();
  	}

}
