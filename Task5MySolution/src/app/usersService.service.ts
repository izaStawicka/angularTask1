import { Injectable } from "@angular/core";
import { CounterService } from "./counterService.service";

@Injectable()
export class UsersService{
    activeUsers:string[]=['Max', 'Anna'];
    inactiveUsers:string[]=['Chris', 'Manu'];

    constructor(private counterService:CounterService){}

    setToInactive(id:number){
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counterService.increaseActionNumber();
    }
    setToActive(id:number){
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id,1);
        this.counterService.increaseActionNumber();
    }
}