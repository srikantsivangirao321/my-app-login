import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  // create subject
 private countSubject: BehaviorSubject<number>= new BehaviorSubject(0); 


  constructor() { }

  // Set Count

  setcount(value:number){
    this.countSubject.next(value);
  }

  // get Count
  getcount(){
    return this.countSubject;
  }

// ===========================

  private cartcount:number=0;
  private addCartSubject: BehaviorSubject<number>= new BehaviorSubject(this.cartcount);

  setcartcount(){
    this.cartcount++;
    this.addCartSubject.next(this.cartcount);
  }

  getcartcount(){
    return this.addCartSubject;
  }

}
