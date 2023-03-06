
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSecret=false;
  clicks=[];

  onToggleDetails(){
    this.showSecret=!this.showSecret;
    this.clicks.push(new Date()); 
  }

}
