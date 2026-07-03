import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingComponent } from './routing.component';
import { Anidado1Component } from './anidado1/anidado1.component';
import { Anidado2Component } from './anidado2/anidado2.component';

const routes: Routes = [
  { path: '', component: RoutingComponent, children: [
    { path: 'anidado1/:id', component: Anidado1Component },
    { path: 'anidado2/:id', component: Anidado2Component }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
