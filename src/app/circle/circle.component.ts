import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {

  public len:number=0;
  public Answer:number=0;


area(){
  this.Answer=3.14*(this.len*this.len);
}
peri(){
  this.Answer=3.14*2*this.len;
}
}
