import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo2',
  templateUrl: './todo2.component.html',
  styleUrls: ['./todo2.component.css']
})
export class Todo2Component {

  public text: {datatext:string, datatime:string}[]=[];

  constructor (private _todoService:TodoService){

    // Create Section

    _todoService.gettodo().subscribe(
    (data:any)=>{
      this.text=data;
    }
    )
    // _todoService.gettodo().subscribe(
    //   (data:any)=>{
    //     console.log(data)
    //     this.text=data;
    //   }
    // )
  }

  // View Section

  view(i:number){
   this._todoService.setview(this.text[i])
  //  console.log(this.text[i])
  }

  // Delete Section

  delete(i:number){
    this.text.splice(i,1);
  }

// Edit Section

  edit(i:number){
    this._todoService.setedit(this.text[i])
  }
}
