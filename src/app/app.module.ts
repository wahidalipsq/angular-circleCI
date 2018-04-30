import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import * as Rollbar from 'rollbar';
import {RollbarErrorHandler} from '../services/rollbar-error-handler';

const rollbarConfig = {
  accessToken: 'f627d5e044a24b9987a23e54c5df352e',
  captureUncaught: true,
  captureUnhandledRejections: true,
  enabled: true,
  environment: 'dev',
  code_version:'angularbesrion111'
};


export function rollbarFactory() {
  return new Rollbar(rollbarConfig);
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: RollbarErrorHandler },
    { provide: Rollbar,  useFactory: rollbarFactory }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
