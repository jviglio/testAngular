import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.scss'
})
export class DetalleComponent implements OnInit {  
  address: string = "";

  constructor(public clientService: ClientService) {        
  }
  
  ngOnInit(): void {
    this.clientService.getAddessObservable().subscribe(
      value => this.address = value
    )
  }
}
