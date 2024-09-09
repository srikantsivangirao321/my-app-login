import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private store:number=0;
  private storecount:BehaviorSubject<number>= new BehaviorSubject(this.store);

  constructor() { }


  setcount(){
    this.store++;
    this.storecount.next(this.store);
  }

  getcount(){
    return this.storecount;
  }
}
