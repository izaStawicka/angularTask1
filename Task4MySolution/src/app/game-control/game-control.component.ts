import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() gameStarted=new EventEmitter<number>();

  someNumber=0;

  constructor() { }

  ngOnInit(): void {
  }

  ref=setInterval(()=>{
    this.gameStarted.emit(this.someNumber++)
   },1000);

  onStartGame(){
   this.ref;
  }

  onStopGame(){
    clearInterval(this.ref)
  }
}
