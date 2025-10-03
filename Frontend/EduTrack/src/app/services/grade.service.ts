import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GradeService {
   apiUrl: string = "https://localhost:44303/api/Grades"


  constructor(private _http : HttpClient) { }



 add(payload: any) {

    // let formData = new FormData();
    // formData.set("Id", student.id.toString());
    // formData.set("DayAbsent", student.dayAbsent.toString());
    // formData.set("StudentId", student.studentId.toString());

    return this._http.post(this.apiUrl + "/Add",payload);

  }





}
