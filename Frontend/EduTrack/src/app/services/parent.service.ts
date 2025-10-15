import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParentService {
  apiUrl: string = "https://localhost:44303/api/Parents"


  constructor(private _http : HttpClient) { }


  // GetParent(ParentId: number) {
  //   let params = new HttpParams();
  //   params = params.set("Id", ParentId.toString());
  //   return this._http.get(this.apiUrl + "/GetById" , {params})
  // }
  GetParentByUserId(userId: number) {
  let params = new HttpParams().set("userId", userId.toString());
  return this._http.get(this.apiUrl + "/GetByUserId", { params });
}

}
