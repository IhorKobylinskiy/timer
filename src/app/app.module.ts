import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { appReducers } from './store/reducers/app.reducers';

import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';

import { TimerComponent as TimerContainerComponent } from './containers/timer/timer.component';
import { TimerComponent } from './components/timer/timer.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';

import { ProgressBarComponent as ProgressBarContainerComponent } from './containers/progress-bar/progress-bar.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';

import { TimeFormatPipe } from './pipes/time-format.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TimerContainerComponent,
    TimerComponent,
    ProgressBarContainerComponent,
    ProgressBarComponent,
    TimeFormatPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    StoreModule.forRoot(appReducers),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
