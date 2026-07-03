import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class UserService {
    private userSubject = new BehaviorSubject<string>('Juan');
    user$ = this.userSubject.asObservable();

    getUserFromApi(): Observable<string> {
        return of('Pedro').pipe(
            tap(user => this.userSubject.next(user))
        );
    }

    updateUser(name: string) {
        this.userSubject.next(name);
    }
}