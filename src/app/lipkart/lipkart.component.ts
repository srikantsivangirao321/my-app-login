import { Component } from '@angular/core';
import { LipkartService } from '../lipkart.service';

@Component({
  selector: 'app-lipkart',
  templateUrl: './lipkart.component.html',
  styleUrls: ['./lipkart.component.css']
})
export class LipkartComponent {

  public lipkarts:any=[];

  constructor(private _kart:LipkartService){

    _kart.getLipkart().subscribe(
      (data:any)=>{
        this.lipkarts=data;
      },
      (Error:any)=>{
        alert("Internal Server Error")
      }
    )




  }










}
