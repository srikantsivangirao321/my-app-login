import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo1',
  templateUrl: './todo1.component.html',
  styleUrls: ['./todo1.component.css']
})
export class Todo1Component {

  public text:string='';
  public time:string='';

  constructor (private _todoService:TodoService){

    // Edit Section

    _todoService.getedit().subscribe(
      (data:any)=>{
        this.text=data.datatext;
        this.time=data.datatime;
      }
    )
    
  }

  // Create Section

  create(){
    this._todoService.settodo({datatext:this.text,datatime:this.time});
  }

  reset(){
    this.text='';
    this.time='';
  }

}
