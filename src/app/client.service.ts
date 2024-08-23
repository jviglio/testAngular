import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient} from "@angular/common/http"
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ClientService {  
  private address = new BehaviorSubject<string>("");
  url: string = environment.apiBaseUrl + '/WeatherForecast';
  public clients: any;

  constructor(private http: HttpClient) { 
  }

  setAddress(address: string){
    this.address.next(address);
  }

  getAddessObservable() : Observable<string> {
    return this.address.asObservable();
  }

  getClients() {
    this.http.get(this.url).subscribe({
      next: resp =>{this.clients = resp},
      error: err => {console.log(err)}
    });
  }
}
