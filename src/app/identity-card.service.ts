import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdentityCardService {

  constructor(private _httpsClient:HttpClient) { }


  getAll():Observable<any>{
    return this._httpsClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student")

  }

  
  getID(term:string){
    return this._httpsClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter="+term)
  }

  getpagination(limit:number, page:number):Observable<any>{
    return this._httpsClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?limit="+limit+"&page="+page)
  }

getsorted(column:string,order:string):Observable<any>{
  return this._httpsClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortBy="+column+"&order="+order)
}

createstudent(data:any):Observable<any>{
  return this._httpsClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/student",data)
}

deleteid(id:string):Observable<any>{
  return this._httpsClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/student/"+id)

}

}
