import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  // public baseUrl:string = "https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction";
  public baseUrl:string = "./assets/vehicle.json";


  constructor(private _httpClient:HttpClient) { }

  getVehicles():Observable<any>{
    return this._httpClient.get(this.baseUrl);
  }

  getVehicle(id:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+"/"+id);
  }

  getFilterVehicles(term:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?filter="+term);
  }

  getSortVehicles(coloumnng:string, order:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?sortBy="+coloumnng+"&order="+order);
  }

  getPaginationVehicles(limit:any, page:any):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?limit="+limit+"&page="+page)
  
    }

    createVehicle(data:any):Observable<any>{
      return this._httpClient.post(this.baseUrl,data)
    }

    updateVehicle(data:any, id:string):Observable<any>{
      return this._httpClient.put(this.baseUrl+"/"+id,data)
    }

  getDeleteVehicles(id:string){
    return this._httpClient.delete(this.baseUrl+"/"+id)
  }
 

}
