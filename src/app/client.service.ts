import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient} from "@angular/common/http"
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ClientService {    
  url: string = environment.apiBaseUrl + '/Client';
  public clients: any;  
  private address = new BehaviorSubject<string>("");
  address$ = this.address.asObservable();

  constructor(private http: HttpClient) { 
  }

  setAddress(address: string){
    this.address.next(address);
  } 

  getClients() {
    this.http.get(this.url).subscribe({
      next: resp =>{this.clients = resp},
      error: err => {console.log(err)}
    });
  }
}
