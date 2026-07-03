import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputComponent } from './input/input/input.component';
import { ServiceComponent } from './service/service.component';
import { ListaComponent } from './service/lista/lista.component';
import { DetalleComponent } from './service/detalle/detalle.component';
import { OutputComponent } from './output/output.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

const routes: Routes = [
  { path: '', component: InputComponent},
  { path: 'input', component: InputComponent},
  { path: 'output', component: OutputComponent},
  { path: 'routing', loadChildren: () => import('./routing/routing.module').then(m => m.RoutingModule) },
  { path: 'service', component: ServiceComponent, children:[
    {path:'lista', component: ListaComponent},
    {path:'detalle', component: DetalleComponent}
  ]},
  { path: 'signal', loadChildren: () => import('./signal/signal.module').then(m => m.SignalModule) },
  { path: 'subscribe', component: SubscribeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

