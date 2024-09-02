import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BankaccountsService } from '../bankaccounts.service';

@Component({
  selector: 'app-view-bankaccounts',
  templateUrl: './view-bankaccounts.component.html',
  styleUrls: ['./view-bankaccounts.component.css']
})



export class ViewBankaccountsComponent {

public bankaccount:any=[];

constructor(private _activatedRoute:ActivatedRoute, private _bankaccountsService:BankaccountsService){

  _activatedRoute.params.subscribe(
    (data:any)=>{
      console.log(data.id)

      _bankaccountsService.getBankaccount(data.id).subscribe(
        (data:any)=>{
          this.bankaccount=data;
        }
      )




    }
  )

}

  
}
