import { Component } from '@angular/core';
import { GradeService } from '../../services/grade.service';
import { GradeInterface } from '../../interfaces/grade-interface';
import { StudentInterface } from '../../interfaces/student-interface';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-parent-grade',
  imports: [],
  templateUrl: './parent-grade.html',
  styleUrl: './parent-grade.css'
})
export class ParentGrade {



  grades: GradeInterface[] = []
  studentInfo?: StudentInterface;


  StudentGradesColumns: string[] = [
    '#',
    'Subject',
    'Score'
  ]
  StudentInfoColumns: string[] = [
    'Name',
    'GradeLevel',
    'Class'
  ]


  constructor(private _gradeSrvice: GradeService,
    private _StudentService: StudentService
  ) { }



  ngOnInit() {

    this.loadGrades(13);
    this.loadStudent(13);

  }



  loadStudent(studentId: number) {

    this._StudentService.GetById(studentId).subscribe({
      next: (res: any) => {
        console.log(res)
        this.studentInfo = res;
      },
      error: err => {// failed request | 400 , 500
        console.log(err.error.message ?? err.error ?? "Unexpected Error");
      }
    });
  }


  loadGrades(studentId: number) {
    this.grades = [];

    this._gradeSrvice.GetByStudentId(studentId).subscribe({
      next: (res: any) => {
        console.log(res)
        this.grades = res;
      },
      error: err => {// failed request | 400 , 500
        console.log(err.error.message ?? err.error ?? "Unexpected Error");
      }
    });
  }

}
