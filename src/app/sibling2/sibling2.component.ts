import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component {

  public store:number=0;
  public storecart:number=0

  constructor(private _commonServce:CommonService){

    _commonServce.getcount().subscribe(
      (data:any)=>{
        this.store=data;
      }
    )


    _commonServce.getcartcount().subscribe(
      (data:any)=>{
        this.storecart=data;
      }
    )
  }

  

  

}
