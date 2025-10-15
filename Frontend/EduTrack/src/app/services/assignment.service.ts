
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Assignment } from '../interfaces/assignment-interfaces';



@Injectable({
  providedIn: 'root'
})
export class AssignmentService {
  apiUrl: string = 'https://localhost:44303/api/Assignments';

  constructor(private _http: HttpClient) { }


  getAll() {
    return this._http.get(this.apiUrl + '/GetAll');
  }


  add(payload: any) {
    return this._http.post(this.apiUrl + '/Add', payload);
  }


  getAssignmentsByStudentId(studentId: number) {
    let params = new HttpParams();
    params = params.set("studentId", studentId.toString());
    return this._http.get(this.apiUrl + "/GetByStudentId", { params });
  }




}
