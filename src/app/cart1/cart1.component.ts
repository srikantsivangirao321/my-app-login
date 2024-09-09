import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart1',
  templateUrl: './cart1.component.html',
  styleUrls: ['./cart1.component.css']
})
export class Cart1Component {


  public count:number=0;
  constructor(private _cartService:CartService){}

 add(){
  this._cartService.setcount();

 }

}
