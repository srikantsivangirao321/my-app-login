import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IdentityCardService } from '../identity-card.service';

@Component({
  selector: 'app-createidentity-card',
  templateUrl: './createidentity-card.component.html',
  styleUrls: ['./createidentity-card.component.css']
})
export class CreateidentityCardComponent {

  constructor(private _studentservice:IdentityCardService){}

  public studentForm:FormGroup=new FormGroup({
    name: new FormControl(),
    dob: new FormControl(),
    phone: new FormControl(),
    city: new FormControl(),
    email: new FormControl()
  })

  create(){
    this._studentservice.createstudent(this.studentForm.value).subscribe(
      (data:any)=>{
        alert("Creatied Successful")
        location.reload();
      },
      (err:any)=>{
        alert("Creation Failed");
      }
    )
  }

  

  
}
