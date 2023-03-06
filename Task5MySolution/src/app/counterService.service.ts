export class CounterService{
    actionNumber=0;
   
    increaseActionNumber(){              
        console.log(this.actionNumber+1);
        this.actionNumber++;
    }
}