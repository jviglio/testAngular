import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrl: './subscribe.component.scss'
})
export class SubscribeComponent {
  currentUser = '';

  constructor(private userService: UserService){}

  ngOnInit() {
    this.userService.user$.subscribe(user => {
      this.currentUser = user;
    })
  }

  public loadFromApi() {
    this.userService.getUserFromApi().subscribe(user => {
      this.currentUser = user;
    });
  }

  public updateUser(){
    this.userService.updateUser('Ana');
  }

}
