import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LipkartService {

  constructor(private _httpClient:HttpClient) { }

  getLipkart():Observable<any>{
    return this._httpClient.get("https://fakestoreapi.com/products");

  }

}