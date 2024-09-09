import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todo:any[]=[];

  // For create

  private textTimeSubject:BehaviorSubject<any>= new BehaviorSubject(this.todo);

  settodo(todos:any){
    this.todo.push(todos)

    this.textTimeSubject.next(this.todo);
    // console.log(this.todo)
  }
  gettodo(){
    return this.textTimeSubject;
  }

  // For View

  private viewSubject:BehaviorSubject<any>= new BehaviorSubject(this.todo)

  setview(value:any){
    this.viewSubject.next(value)
  }
  getview(){
    return this.viewSubject;
  }

  // Edit Section

  private editSubject:BehaviorSubject<any>= new BehaviorSubject(this.todo)

  setedit(value:any){
    this.editSubject.next(value)
  }

  getedit(){
    return this.editSubject;
  }


}
