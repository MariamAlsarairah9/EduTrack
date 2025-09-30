import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
    apiUrl: string = "https://localhost:44303/api/Students"

      constructor(private _http : HttpClient) { }

      
  getAll(searchObj: any) {
    let params = new HttpParams();
    params = params.set("GradeLevel", searchObj.GradeLevel ?? "");
    params = params.set("Class", searchObj.Class ?? "");

    return this._http.get(this.apiUrl + "/GetAll", { params});
  }

}
