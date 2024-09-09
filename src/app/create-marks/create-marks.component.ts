import { Component } from '@angular/core';
import { FormArray, FormControl, FormControlName, FormGroup, FormGroupName, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-marks',
  templateUrl: './create-marks.component.html',
  styleUrls: ['./create-marks.component.css']
})
export class CreateMarksComponent {

  public studentform: FormGroup=new FormGroup({
    name: new FormControl(),
    clas: new FormControl(),
    email: new FormControl(),
    dob: new FormControl(),
    phone: new FormControl('',[Validators.required, Validators.min(1000000000), Validators.max(9999999999)]),
    address: new FormGroup({
    addressline: new FormControl(),
    city: new FormControl(),
    state: new FormControl(),
    pincode: new FormControl('', [Validators.required, Validators.min(100000), Validators.max(999999)]),
    }),
    type: new FormControl(),
    // busfee: new FormControl(),
    // hostelfee: new FormControl(),
    marks:new FormArray([])
   });

   get marksFormArray(){
    return this.studentform.get('marks') as FormArray;
   }

   addmarks(){
    this.marksFormArray.push(
      new FormGroup({
        class: new FormControl(),
        year: new FormControl(),
        percentage: new FormControl('',[Validators.required,Validators.min(0),Validators.max(100)]),
      })
    )
   }

   delete(i:number){
    this.marksFormArray.removeAt(i);
   }







   constructor(){
    this.studentform.get('type')?.valueChanges.subscribe(
      (data:any)=>{
        if(data=='dayscholar'){
          this.studentform.addControl('busfee', new FormControl());
          this.studentform.removeControl('hostelfee')
        }
        else if(data='residential'){
          this.studentform.addControl('hostelfee', new FormControl());
          this.studentform.removeControl('busfee');
        }
      }
    )
   }


   submit(){
    console.log(this.studentform.value)
   }

}
