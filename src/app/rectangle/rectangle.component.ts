import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {

  public len:number=0;
  public bre:number=0;
  public answer:number= 0;

  are(){
    this.answer=this.len*this.bre;
  }
  per(){
    this.answer=2*(this.len*this.bre)
  }

}
