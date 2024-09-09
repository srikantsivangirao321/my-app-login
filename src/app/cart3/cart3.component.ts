import { Component } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart3',
  templateUrl: './cart3.component.html',
  styleUrls: ['./cart3.component.css']
})
export class Cart3Component {

  public store:number=0;
  constructor(private _cartService:CartService){

    _cartService.getcount().subscribe(
      (data:any)=>{
        this.store=data;
      }
    )
  }

}
