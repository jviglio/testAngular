import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PadreComponent } from './input/padre/padre.component';
import { HijoComponent } from './input/hijo/hijo.component';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './input/input/input.component';
import { OutputComponent } from './output/output.component';
import { IndiceComponent } from './indice/indice.component';
import { RoutingComponent } from './routing/routing.component';
import { Anidado1Component } from './routing/anidado1/anidado1.component';
import { Anidado2Component } from './routing/anidado2/anidado2.component';
import { ServiceComponent } from './service/service.component';
import { ListaComponent } from './service/lista/lista.component';
import { DetalleComponent } from './service/detalle/detalle.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule} from "@angular/common/http";
import { ParentComponent } from './output/parent/parent.component';
import { ChildComponent } from './output/child/child.component';
import { SignalComponent } from './signal/signal.component'

@NgModule({
  declarations: [
    AppComponent,
    PadreComponent,
    HijoComponent,
    InputComponent,
    OutputComponent,
    IndiceComponent,
    RoutingComponent,
    Anidado1Component,
    Anidado2Component,
    ServiceComponent,
    ListaComponent,
    DetalleComponent,
    HomeComponent,
    ParentComponent,
    ChildComponent,
    SignalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
