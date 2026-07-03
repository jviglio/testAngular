import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignalRoutingModule } from './signal-routing.module';
import { SignalComponent } from './signal.component';

@NgModule({
  declarations: [
    SignalComponent
  ],
  imports: [
    CommonModule,
    SignalRoutingModule
  ]
})
export class SignalModule { }
