import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})




export class CreateVehicleComponent {



  public id:string="";
  public vehicleForm:FormGroup=new FormGroup({
      Vehicle: new FormControl(),
      manufacturer: new FormControl(),
      model: new FormControl(),
      type: new FormControl(),
      fuel: new FormControl(),
      color: new FormControl(),
      image: new FormControl(),
      cost: new FormControl()
    })


    
    constructor(private _vehicleService:VehicleService, private _activatedRoute:ActivatedRoute){
      _activatedRoute.params.subscribe(
        (data:any)=>{
          console.log(data.id);
          this.id=data.id;
          _vehicleService.getVehicle(data.id).subscribe(
            (data:any)=>{
              this.vehicleForm.patchValue(data);
            }
          )
        }
      )
    }



    create(){
      console.log(this.vehicleForm.value);

      if(this.id){
        this._vehicleService.updateVehicle(this.vehicleForm.value,this.id).subscribe(
          (data:any)=>{
            alert("Updated Sucessfully!!!!!!")
            this.vehicleForm.reset();
          },
          (err:any)=>{
            alert("Updation Failed!")
          }
        )

      }
      else{
        
        this._vehicleService.createVehicle(this.vehicleForm.value).subscribe(
          (data:any)=>{
            alert("Created Sucessfully!!!!!!")
            this.vehicleForm.reset();
          },
          (err:any)=>{
            alert("Creation Failed!")
          }
        )
      }
      }
      
      

   




}
