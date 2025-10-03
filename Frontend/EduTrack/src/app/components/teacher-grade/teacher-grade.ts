import { Component } from '@angular/core';
import { StudentInterface } from '../../interfaces/student-interface';
import { StudentService } from '../../services/student.service';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { GradeInterface } from '../../interfaces/grade-interface';
import { GradeService } from '../../services/grade.service';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-teacher-grade',
  imports: [NgxPaginationModule, FormsModule ,ReactiveFormsModule],
  templateUrl: './teacher-grade.html',
  styleUrl: './teacher-grade.css'
})
export class TeacherGrade {

  constructor(private _studentSrvice: StudentService,
    private _gradeSrvice: GradeService
  ) {

  }
  students: StudentInterface[] = []
  StudentTableColumns: string[] = [
    '#',
    'Name',
    'Grade level',
    'Class',
    'Score'
  ];

  // gradesMap: { [studentId: number]: GradeInterface[] } = {};

  searchFilterForm: FormGroup = new FormGroup({
    GradeLevel: new FormControl(null),
    Class: new FormControl(null),
  })


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
              gradeLevel: x.gradeLevel,

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

  paginationconfig = { itemsPerPage: 7, currentPage: 1 };
  changePage(pageNumber: number) {
    this.paginationconfig.currentPage = pageNumber;
  }







  // addGrades() {
  //   let grades: GradeInterface[] = this.students
  //     .filter(stu => stu.grade != null)
  //     .map(stu => ({
  //       id: 0,
  //       studentId: stu.id,
  //       subjectName: 'math', // 👈 تختار المادة من DropDown أو TextBox
  //       score: Number(stu.grade)
  //     }));

  //   let payload = { gradesDto: grades };

  //   this._gradeSrvice.add(payload).subscribe({
  //     next: () => {
  //       this.students.forEach(stu => stu.grade = undefined);
  //       alert('Grades saved');
  //     },
  //     error: err => {
  //       console.log(err.error.message ?? err.error ?? "Unexpected Error");
  //       alert('Something went wrong');
  //     }
  //   });
  // }





}
