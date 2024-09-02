import { Component } from '@angular/core';
import { timeInterval } from 'rxjs';

@Component({
  selector: 'app-data-bindng',
  templateUrl: './data-bindng.component.html',
  styleUrls: ['./data-bindng.component.css']
})
export class DataBindngComponent {

public age:number = 20;
public name:string="abc";
public isIndian:boolean = true;


public isvalid:boolean = false;
public url:string = "/assets/error-image.jpeg"


submit(){
  alert("submitted!!!!!!!!!")
}
typing(){
  alert("typing.....")
}


public phone:string="+91";



// Practice





city:string="Hyderabad";

ram=new Date().toLocaleTimeString();

sita=setInterval(() => {
  this.ram=new Date().toLocaleTimeString();
}, 1000);




isdisabled:boolean=false;

isactive:boolean=false;
inactive:boolean=true;




}
