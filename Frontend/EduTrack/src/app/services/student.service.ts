import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  apiUrl: string = "https://localhost:44303/api/Students"

  constructor(private _http: HttpClient) { }



  getAll(searchObj: any) {
    let params = new HttpParams();
    params = params.set("GradeLevelId", searchObj.GradeLevelId ?? "");
    params = params.set("ClassId", searchObj.ClassId ?? "");

    return this._http.get(this.apiUrl + "/GetAll", { params });
  }

  GetById(Id: number) {
    let params = new HttpParams();
    params = params.set("Id", Id.toString());
    return this._http.get(this.apiUrl + "/GetById", { params });
  }


}
