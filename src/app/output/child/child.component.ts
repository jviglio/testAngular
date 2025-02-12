import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Output() mensajeEvent = new EventEmitter<string>();
  
  enviarMensaje() {
    this.mensajeEvent.emit('Hola desde el componente Hijo');
  }
}
