import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {


  public vehicles:any = [];
  public term:string = "";
  public column:string = "";
  public order:string="";
  public limit:any="";
  public page:any="";

  constructor(private _vehicleService:VehicleService, private _router:Router) {
      _vehicleService.getVehicles().subscribe(
        (data:any)=>{
          this.vehicles= data;
        },
        (Error:any)=>{
          alert("Internal Server Error");
        }
      ) }

      filter(){
        this._vehicleService.getFilterVehicles(this.term).subscribe(   
          (data:any)=>{
            this.vehicles=data;
          },
          (err:any)=>{
            alert("Internal Server Error");
          }
        )
      }

      sort(){
        this._vehicleService.getSortVehicles(this.column,this.order).subscribe(
          (data:any)=>{
            this.vehicles = data;
          },
          (err:any)=>{
            alert("Internal Server Issue");
          }
        )
      }
      hit(){
        this._vehicleService.getPaginationVehicles(this.limit, this.page).subscribe(
          (data:any)=>{
            this.vehicles=data;
          },
          (err:any)=>{
            alert("Internal Server Error")
          }
        )
      }

      delete(id:string){
        this._vehicleService.getDeleteVehicles(id).subscribe(
          (data:any)=>{
            alert("Deleted Succesfully")
            location.reload()
          },
          (err:any)=>{
            alert("Deleted Failed")
          }
        )

      }

      view(id:string){
      this._router.navigateByUrl("/dashboard/view-vehicle/"+id)  
      
      }
        edit(id:string){
          this._router.navigateByUrl("/dashboard/edit-vehicle/"+id)  
          
          }
      

}
