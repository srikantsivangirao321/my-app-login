import { Component } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart2',
  templateUrl: './cart2.component.html',
  styleUrls: ['./cart2.component.css']
})
export class Cart2Component {

  public store:number=0;

  constructor (private _cartService:CartService){

    _cartService.getcount().subscribe(
      (data:any)=>{
        this.store=data;
        
      }
    )


    

  }

  
}
