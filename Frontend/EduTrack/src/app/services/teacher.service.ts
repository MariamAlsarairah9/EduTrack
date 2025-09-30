import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  apiUrl: string = "https://localhost:44303/api/Teachers"


  constructor(private _http : HttpClient) { }


  GetTeacher(TeacherId: number) {
    let params = new HttpParams();
    params = params.set("Id", TeacherId.toString());
    return this._http.get(this.apiUrl + "/GetById" , {params})
  }
}


