import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo3',
  templateUrl: './todo3.component.html',
  styleUrls: ['./todo3.component.css']
})
export class Todo3Component {
  public text:string='';
  public time:string='';

  constructor(private _todoService:TodoService){


    // View Section
    
 _todoService.getview().subscribe(
  (data:any)=>{
    this.text=data.datatext;
    this.time=data.datatime;
  }
 )

  }

}
