import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GradeService {
   apiUrl: string = "https://localhost:44303/api/Grades"


  constructor(private _http : HttpClient) { }



 add(payload: any) {

  

    return this._http.post(this.apiUrl + "/Add",payload);

  }





}
