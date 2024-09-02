import { Component } from '@angular/core';
import { MemesService } from '../memes.service';

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.css']
})
export class MemesComponent {

  // name:string="";
  // height:any=[];
  // width:any=[];

  public memes:any=[];

 constructor (private _memesService:MemesService){

  _memesService.getmemes().subscribe(
    (data:any)=>{
      this.memes=data.data.memes;
    },
    (err:any)=>{
      alert("Internal Server Error")
    }
  )
 } 



  }

  


