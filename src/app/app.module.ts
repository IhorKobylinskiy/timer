import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { TimerComponent } from './components/timer/timer.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';

import { TimeFormatPipe } from './pipes/time-format.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TimerComponent,
    ProgressBarComponent,
    TimeFormatPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
