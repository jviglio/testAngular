import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingRoutingModule } from './routing-routing.module';
import { RoutingComponent } from './routing.component';
import { Anidado1Component } from './anidado1/anidado1.component';
import { Anidado2Component } from './anidado2/anidado2.component';

@NgModule({
  declarations: [
    RoutingComponent,
    Anidado1Component,
    Anidado2Component
  ],
  imports: [
    CommonModule,
    RoutingRoutingModule
  ]
})
export class RoutingModule { }
