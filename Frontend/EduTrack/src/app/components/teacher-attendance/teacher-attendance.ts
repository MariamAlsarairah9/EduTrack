import { Component } from '@angular/core';
import { ListInterface } from '../../interfaces/list-interface';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentInterface } from '../../interfaces/student-interface';
import { StudentService } from '../../services/student.service';
import { AttendanceService } from '../../services/attendance.service';
import { AttendanceInterface } from '../../interfaces/attendance-interface';
@Component({
  selector: 'app-teacher-attendance',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './teacher-attendance.html',
  styleUrl: './teacher-attendance.css'
})
export class TeacherAttendance {


  constructor(private _studentSrvice: StudentService,
    private _attendanceServices: AttendanceService) { }

  students: StudentInterface[] = []


  searchFilterForm: FormGroup = new FormGroup({
    GradeLevel: new FormControl(null),
    Class: new FormControl(null),
  })


  Level: ListInterface[] = [
    { Id: null, Name: "Select level " },
    { Id: 1, Name: "1" },
    { Id: 2, Name: "2" },
  ]
  class: ListInterface[] = [
    { Id: null, Name: "Select class" },
    { Id: 1, Name: "A" },
    { Id: 2, Name: "B" },
  ]
  StudentTableColumns: string[] = [
    '#',
    'Name',
    'grade level',
    'class',
    'check'
  ];

  ngOnInit() {

    this.loadstudent();

  }



  loadstudent() {
    this.students = [];
    let searchObj = {
      GradeLevel: this.searchFilterForm.value.GradeLevel,
      Class: this.searchFilterForm.value.Class,
    }
    this._studentSrvice.getAll(searchObj).subscribe({

      next: (res: any) => { // succesful request 

        if (res?.length > 0) {
          res.forEach((x: any) => {
            let student: StudentInterface = {
              id: x.id,
              name: x.name,
              class: x.class,
              gradeLevel: x.gradeLevel

            };
            this.students.push(student);

          });
        }
        else {

        }
      },
      error: err => {// failed request | 400 , 500
        console.log(err.error.message ?? err.error ?? "Unexpected Error");
      }


    })


  }

  addAttendance() {
    let absents: AttendanceInterface[] = this.students.filter(stu => stu.isAbsent) // رجع بس الغايبين
      .map(stu => ({
        id: 0,
        studentId: stu.id,
        dayAbsent: new Date()
      }));

    const payload = { attendanceDto: absents };



    this._attendanceServices.add(payload).subscribe({

      next: (res: any) => {
        this.students.forEach(stu => stu.isAbsent = false)
        alert('Attendance saved')
      },

      error: err => {// failed request | 400 , 500
        
          console.log(err.error.message ?? err.error ?? "Unexpected Error")

          alert('something is wrong')
        
      }

    })



  }



}
