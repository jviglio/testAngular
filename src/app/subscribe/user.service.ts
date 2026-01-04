import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";

@Injectable({ providedIn: 'root' })
export class UserService {
    private userSubject = new BehaviorSubject<string>('Juan');
    user$ = this.userSubject.asObservable();

    getUserFromApi(): Observable<string> {
        return of('Pedro');
    }

    updateUser(name: string) {
        this.userSubject.next(name);
    }
}