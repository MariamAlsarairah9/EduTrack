
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AssignmentService {
  apiUrl: string = 'https://localhost:44303/api/Assignments';

  constructor(private _http: HttpClient) {}


  getAll() {
    return this._http.get<any[]>(this.apiUrl + '/GetAll');
  }


  add(data: any) {
    return this._http.post<any[]>(this.apiUrl + '/newassignment', data);
  }
}
