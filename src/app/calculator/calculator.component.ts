import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

public Number1:number = 0;
public Number2:number = 0;
public XXXXX:number = 0;


sum(){
  this.XXXXX=this.Number1+this.Number2;
}
sub(){
  this.XXXXX=this.Number1-this.Number2;
}
mul(){
  this.XXXXX=this.Number1*this.Number2;
}
div(){
  this.XXXXX=this.Number1/this.Number2;
}



}
