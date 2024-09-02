import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {


  public height:number=0;
  public weight:number=0;
  public answer:number=0;


  calculate(){
    this.answer = this.weight/(this.height/100*this.height/100);
  }
  
}
