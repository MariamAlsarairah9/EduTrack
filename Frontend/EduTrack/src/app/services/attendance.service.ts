import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AttendanceInterface } from '../interfaces/attendance-interface';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  apiUrl: string = "https://localhost:44303/api/Attendances"

  constructor(private _http: HttpClient) { }






  add(Attendance: any) {

    // let formData = new FormData();
    // formData.set("Id", student.id.toString());
    // formData.set("DayAbsent", student.dayAbsent.toString());
    // formData.set("StudentId", student.studentId.toString());

    return this._http.post(this.apiUrl + "/Add",Attendance);

  }



}
