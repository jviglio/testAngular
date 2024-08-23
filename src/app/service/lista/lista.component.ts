import { Component } from '@angular/core';
import { ClientService } from '../../client.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent {  

  constructor(public clientService: ClientService){    
    clientService.getClients();    
  }

  showAddress(address: string | undefined){
    if(address){
      this.clientService?.setAddress(address);      
    }       
  }
}
