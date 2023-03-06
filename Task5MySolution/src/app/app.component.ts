import { Component, DoCheck, OnInit, SimpleChanges } from '@angular/core';
import { CounterService } from './counterService.service';
import { UsersService } from './usersService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck{
  activeUsers:string[]= [];
  inactiveUsers:string[] = [];
  actionNumber:number;

  constructor(private usersService:UsersService, private counterService:CounterService){ }
  ngDoCheck(): void {
    this.actionNumber=this.counterService.actionNumber;
  }     
  ngOnInit(): void {
    this.activeUsers=this.usersService.activeUsers;
    this.inactiveUsers=this.usersService.inactiveUsers; 
  } 
}
