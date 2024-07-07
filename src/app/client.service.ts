import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {  
  private address = new BehaviorSubject<string>("");
  
  constructor() { 
  }

  setAddress(address: string){
    this.address.next(address);
  }

  getAddessObservable() : Observable<string> {
    return this.address.asObservable();
  }

  getClients() : any {
    return [{id:1, name:'Juan', address: 'zzzzzzz 444'}, 
             {id:2, name:'Gaston', address: 'eeeeee 111'}, 
             {id:3, name:'Fernando', address: 'lllll 555'}];
  }
}
