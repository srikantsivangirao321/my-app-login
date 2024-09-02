import { Component } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent {


public url:string="/assets/dice6.jpg/";

roll(){

  const ram = Math.floor(Math.random() * 6) + 1
  console.log(ram);


  // Short Formula //
  // this.url=`/assets/dice${ram}.jpg/` 
  
 
if(ram==1){
  this.url= 'assets/dice1.jpg';
}
else if(ram==2){
  this.url='./assets/dice2.jpg';
}
else if(ram==3){
  this.url='./assets/dice3.jpg';
}
else if(ram==4){
  this.url='./assets/dice4.jpg';
}
else if(ram==5){
  this.url='./assets/dice5.jpg';
}
else if(ram==6){
  this.url='./assets/dice6.jpg';
}


}

}


