import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputComponent } from './input/input/input.component';
import { RoutingComponent } from './routing/routing.component';
import { Anidado1Component } from './routing/anidado1/anidado1.component';
import { Anidado2Component } from './routing/anidado2/anidado2.component';
import { ServiceComponent } from './service/service.component';
import { ListaComponent } from './service/lista/lista.component';
import { DetalleComponent } from './service/detalle/detalle.component';

const routes: Routes = [
  { path: '', component: InputComponent},
  { path: 'input', component: InputComponent},
  { path: 'routing', component: RoutingComponent, children:[
    {path: 'anidado1/:id', component: Anidado1Component},
    {path: 'anidado2/:id', component: Anidado2Component}
  ]},
  { path: 'service', component: ServiceComponent, children:[
    {path:'lista', component: ListaComponent},
    {path:'detalle', component: DetalleComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

