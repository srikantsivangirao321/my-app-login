import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-opertaions',
  templateUrl: './opertaions.component.html',
  styleUrls: ['./opertaions.component.css']
})
export class OpertaionsComponent {

  
  @Input() public num1:number=0;
  @Input() public num2:number=0;
  public result:number=0;



  @Output() Event:EventEmitter<number>=new EventEmitter();

  send(){
    this.Event.emit(this.result);
  }

  sum(){
    this.result=(this.num1+this.num2)
    this.send();
  }
  sub(){
    this.result=(this.num1-this.num2)
    this.send();
  }
  mul(){
    this.result=(this.num1*this.num2)
    this.send();
  }
  div(){
    this.result=(this.num1/this.num2)
    this.send();
  }

}
