import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../usersService.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  constructor(private usersService:UsersService){}

  @Input() users: string[];

  onSetToActive(id: number) {
    this.usersService.setToActive(id);
  }
}
