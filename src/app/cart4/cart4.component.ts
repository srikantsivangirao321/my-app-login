import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart4',
  templateUrl: './cart4.component.html',
  styleUrls: ['./cart4.component.css']
})
export class Cart4Component {

  public store:number=0;

  constructor (private _cartService:CartService){

    _cartService.getcount().subscribe(
      (data:any)=>{
        this.store=data;
      }
    )
  }


  

}
