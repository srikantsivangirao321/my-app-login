import { Component } from '@angular/core';
import { IdentityCardService } from '../identity-card.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-identity-card',
  templateUrl: './identity-card.component.html',
  styleUrls: ['./identity-card.component.css']
})
export class IdentityCardComponent {



  ram:any=[];
  term:string="";
  limit:number=0;
  page:number=0;
  column:string="";
  order:string="";






  constructor(private _card:IdentityCardService){

    this._card.getAll().subscribe(
      (data:any)=>{
        this.ram=data;
      },
      (err:any)=>{
        alert("Internal Server Error")
      }
    )
  }

  filter(){
    this._card.getID(this.term).subscribe(
      (data:any)=>{
        this.ram=data;
      },
      (err:any)=>{
        alert("Internal Server Error!!!")
      }
    )
  }

    hit(){
      this._card.getpagination(this.limit,this.page).subscribe(
        (data:any)=>{
          this.ram=data;
        },
        (err:any)=>{
          alert("Internal Server Error!!!")
        }
      )
    }

sort(){

  this._card.getsorted(this.column,this.order).subscribe(
    (data:any)=>{
      this.ram=data;
    },
    (err:any)=>{
      alert("Internal Server Error!!!")
    }
  )
}
delete(id:string){
  this._card.deleteid(id).subscribe(
    (data:any)=>{
      alert("Deleted Sucessfully")
      location.reload();
    },
    (err:any)=>{
      alert("Deletion Failed");
    }
  )
}
    


    

}
