import { Component } from '@angular/core';
import { AttendanceService } from '../../services/attendance.service';
import { AttendanceInterface } from '../../interfaces/attendance-interface';
import { DatePipe } from '@angular/common';
import { ParentInterface } from '../../interfaces/parent-interface';
import { ParentService } from '../../services/parent.service';
@Component({
  selector: 'app-parent-attendance',
  imports: [DatePipe],
  templateUrl: './parent-attendance.html',
  styleUrl: './parent-attendance.css'
})
export class ParentAttendance {

  constructor(private _AttendanceService: AttendanceService,
    private _ParentService: ParentService
  ) { }

  attendances: AttendanceInterface[] = [];
  parent: ParentInterface | null = null;


  ngOnInit() {
    this.parentinfo(1)

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
  parentinfo(id: number) {

    this._ParentService.GetParent(id).subscribe({
      next: (res: any) => {

        this.parent = res;
        this.loadAttendance(res.studentId);

      },
      error: err => {// failed request | 400 , 500
        console.log(err.error.message ?? err.error ?? "Unexpected Error");
      }



    })
  }
}
