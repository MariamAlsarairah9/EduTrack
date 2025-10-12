import { Component } from '@angular/core';
import { AttendanceService } from '../../services/attendance.service';
import { AttendanceInterface } from '../../interfaces/attendance-interface';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-parent-attendance',
  imports: [DatePipe],
  templateUrl: './parent-attendance.html',
  styleUrl: './parent-attendance.css'
})
export class ParentAttendance {

  constructor(private _AttendanceService: AttendanceService) { }

  attendances: AttendanceInterface[] = [];

  ngOnInit() {

    this.loadAttendance(13);

  }

  loadAttendance(id: number) {
    this._AttendanceService.GetByStudentId(id).subscribe({
      next: (res: any) => {

        this.attendances = res;
      },
      error: err => {// failed request | 400 , 500
        console.log(err.error.message ?? err.error ?? "Unexpected Error");
      }

    });
  }
  
}
