import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParentService {
  apiUrl: string = "https://localhost:44303/api/Parents"


  constructor(private _http: HttpClient) { }



  GetParentByUserId(userId: number) {
    let params = new HttpParams().set("userId", userId.toString());
    return this._http.get(this.apiUrl + "/GetByUserId", { params });
  }

  GetAll() {
    return this._http.get(this.apiUrl + "/GetAll");
  }
  
  add(parent: any) {

    return this._http.post(this.apiUrl + "/Add", parent);


  }

}
