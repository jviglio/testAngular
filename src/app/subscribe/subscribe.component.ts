import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrl: './subscribe.component.scss'
})
export class SubscribeComponent {
  user$ = this.userService.user$;

  constructor(private userService: UserService){}

  public loadFromApi() {
    this.userService.getUserFromApi().subscribe();
  }

  public updateUser(){
    this.userService.updateUser('Ana');
  }

}
