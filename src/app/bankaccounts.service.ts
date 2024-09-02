import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankaccountsService {

  constructor(private _httpClient:HttpClient) { }


getBankaccounts():Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals")
}

getBankaccount(id:string):Observable<any>{
  return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id)
}



getfilterBankaccounts(ram:string):Observable<any>{
 return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter="+ram)
}


getSortBankaccounts(column:string, order:string):Observable<any>{
  return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortBy="+column+"&order="+order)

}


getPaginationBankaccounts(limit:any, page:any){
  return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit="+limit+"&page="+page)
}


createBankaccounts(data:any):Observable<any>{
  return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/principals",data)
}


updateBankaccounts(data:any, id:string):Observable<any>{
  return this._httpClient.put("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id,data)
}


}


