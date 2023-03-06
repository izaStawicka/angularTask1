import { Component, Input} from '@angular/core';
import { UsersService } from '../usersService.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  constructor(private usersService:UsersService){}

  @Input() users: string[];

  onSetToInactive(id: number) {
   this.usersService.setToInactive(id);
  }
}
