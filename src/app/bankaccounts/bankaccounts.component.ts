import { Component } from '@angular/core';
import { BankaccountsService } from '../bankaccounts.service';
import { VehicleService } from '../vehicle.service';
import { Subscriber } from 'rxjs';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-bankaccounts',
  templateUrl: './bankaccounts.component.html',
  styleUrls: ['./bankaccounts.component.css']
})
export class BankaccountsComponent {

  public bankaccounts:any=[];
  public ram:string = "";
  public column:string = "";
  public order:string = "";
  public limit:any="";
  public page:any="";


  constructor (private _bankaccountService:BankaccountsService, private _router:Router){

    _bankaccountService.getBankaccounts().subscribe(
      (data:any)=>{
        this.bankaccounts=data;
      },
      (Error:any)=>{
        alert("Internal Server Error");
      }
    )

  }

  filter(){
    this._bankaccountService.getfilterBankaccounts(this.ram).subscribe(
      (data:any)=>{
        this.bankaccounts=data;
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
    )
  }

  sort(){

    this._bankaccountService.getSortBankaccounts(this.column, this.order).subscribe(
      (data:any)=>{
        this.bankaccounts=data;
      },
      (err:any)=>{
        alert("Internal Server Error");
      }

    )
  }

  hit(){
    this._bankaccountService.getPaginationBankaccounts(this.limit, this.page).subscribe(
      (data:any)=>{
        this.bankaccounts=data;
      },
      (err:any)=>{
        alert("Internal Server Issue")
      }
    )
  }

  view(id:string){
    this._router.navigateByUrl("/dashboard/view-bankaccount/"+id)
  }

  edit(id:string){
    this._router.navigateByUrl("/dashboard/edit-bankaccount/"+id)
  }







}
