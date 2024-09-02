import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BankaccountsService } from '../bankaccounts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-bank',
  templateUrl: './create-bank.component.html',
  styleUrls: ['./create-bank.component.css']
})
export class CreateBankComponent {

public id:string="";
public bankForm:FormGroup=new FormGroup({
  account_name:new FormControl(),
  available_balance:new FormControl(),
  account_number:new FormControl(),
  city:new FormControl(),
  profie_picture:new FormControl(),
})

constructor (private _ramService:BankaccountsService, private _activateRoute:ActivatedRoute){

_activateRoute.params.subscribe(
  (data:any)=>{
    console.log(data.id);
    this.id=data.id;

   _ramService.getBankaccount(data.id).subscribe(
    (data:any)=>{
      this.bankForm.patchValue(data);
    }
   )
    
  }
)
}


create(){

  if (this.id) {

    this._ramService.updateBankaccounts(this.bankForm.value, this.id).subscribe(
      (data:any)=>{
        alert("Updated Succesfully!!!!!")
      },
      (err:any)=>{
        alert("Updation Failed!")
      }
    )
    
  }
  else{

    console.log(this.bankForm.value);
  this._ramService.createBankaccounts(this.bankForm.value).subscribe(
    (data:any)=>{
      alert("Created Succesfully!!!!!")
    },
    (err:any)=>{
      alert("Creation Failed!")
    }

  )
}
    
  }



  



}
