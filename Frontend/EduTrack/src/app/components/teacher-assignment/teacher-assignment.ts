
import { RouterOutlet } from '@angular/router';
import { FormsModule } from "@angular/forms";


import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Assignment } from '../../interfaces/assignment-interfaces';
import { CommonModule, DatePipe } from '@angular/common';
import { AssignmentService } from '../../services/assignment.service';
import { ListInterface } from '../../interfaces/list-interface';
import { LookupService } from '../../services/lookup.service';
import { LookupsMajorCodes } from '../../enums/lookups-major-codes';


@Component({
  selector: 'app-teacher-assignment',
  imports: [ FormsModule,ReactiveFormsModule, CommonModule],
  templateUrl: './teacher-assignment.html',
  styleUrls: ['./teacher-assignment.css'],
  standalone: true,
  providers: [DatePipe],
})
export class TeacherAssignment {





  @ViewChild('closeButton') closeButton?: ElementRef<HTMLButtonElement>;// Quickfix or eng

  constructor(
    private datePipe: DatePipe, 
    private _assignmentService: AssignmentService, 
    private _lookupService: LookupService
  ) {}

  teacherassignment: Assignment[] = []

  gradeLevel: ListInterface[] = []

  class: ListInterface[] = []

  subject: ListInterface[] = []




  Assignmentform = new FormGroup({
    Subject: new FormControl(null, [Validators.required]),
    Description: new FormControl(null, [Validators.required]),
    DueDateSub: new FormControl(null),
    classId: new FormControl(null, [Validators.required]),     
    gradeLevelId: new FormControl(null, [Validators.required]),
    studentId: new FormControl(null, [Validators.required])    
  });

  assighnmentTableColumns: string[] = ['#', 'Subject', 'Description', 'Due Date', 'Class', 'GradeLevel'];

  
  Subjectlist = [
    { Id: null, name: 'Select Grade Level' },
    { Id: 1, name: 'math' },
    { Id: 2, name: 'Arabic'}
  ];

  classList = [
    { Id: null, name: 'Select Class' },
    { Id: 1, name: 'Class A' },
    { Id: 2, name: 'Class B' }
  ];

  gradeLevelList = [
    { Id: null, name: 'Select Grade Level' },
    { Id: 1, name: 'Grade 1' },
    { Id: 2, name: 'Grade 2' }
  ];

 
  ngOnInit(): void{
    this.loadassignment();
    this.loadGradeLevel();
    this.loadClass();
    this.loadSubject();
  }
  

  loadassignment(){
    this.teacherassignment = [];

    this._assignmentService.getAll().subscribe({
      next: (res: any) => { 
        if ( res.length > 0) {
          res.forEach((x: any) => {
            let assignments : Assignment ={
              id: x.id ,
              subject: x.subject ,
              description: x.description,
              dueDateSub: x.dueDateSub,
              classId:x.class,
              gradeLevelId: x.gradelevel,
             // StudentId: x.StudentId  ,
            };

            this.teacherassignment.push(assignments);
          });
        }
      },
      error: (err)  => { 
        console.log(err?.error?.message ?? err?.error ??
           'Unexpected error');
      }
    });
  }


  loadGradeLevel() {
    this.gradeLevel = [{ Id: null, Name: "Select GradeLevel" }]
    this._lookupService.getByMajorCode(LookupsMajorCodes.gradeLevels).subscribe({
      next: (res: any) => { // succesful request 
        if (res?.length > 0) {
          this.gradeLevel = this.gradeLevel.concat(res.map((x: any) => ({ Id: x.id, Name: x.name } as ListInterface))
          )


        }
      },
      error: err => {// failed request | 400 , 500
        console.log(err.error.message ?? err.error ?? "Unexpected Error");
      }


    })

  }
  loadClass() {
    this.class = [{ Id: null, Name: "Select class" }]
    this._lookupService.getByMajorCode(LookupsMajorCodes.classes).subscribe({
      next: (res: any) => { // succesful request 
        if (res?.length > 0) {
          this.class = this.class.concat(res.map((x: any) => ({ Id: x.id, Name: x.name } as ListInterface))
          )


        }
      },
      error: err => {// failed request | 400 , 500
        console.log(err.error.message ?? err.error ?? "Unexpected Error");
      }


    })

  }

  loadSubject() {
    this.subject = [{ Id: null, Name: "Select subject" }]
    this._lookupService.getByMajorCode(LookupsMajorCodes.subjects).subscribe({
      next: (res: any) => { // succesful request 
        if (res?.length > 0) {
          this.subject = this.subject.concat(res.map((x: any) => ({ Id: x.id, Name: x.name } as ListInterface))
          )


        }
      },
      error: err => {// failed request | 400 , 500
        console.log(err.error.message ?? err.error ?? "Unexpected Error");
      }


    })

  }
saveassignment() {
  let newassignment: Assignment = {
    id: 0,
    subject: this.Assignmentform.value.Subject!, 
    description: this.Assignmentform.value.Description!,
    dueDateSub: this.Assignmentform.value.DueDateSub
      ? new Date(this.Assignmentform.value.DueDateSub)
      : new Date(),
    classId: Number(this.Assignmentform.value.classId ?? 0),
    gradeLevelId: Number(this.Assignmentform.value.gradeLevelId ?? 0),
  };

  let payload = {
  
      Id: newassignment.id,
      Subject: newassignment.subject,
      Description: newassignment.description,
      DueDateSub: new Date(newassignment.dueDateSub),
      //studentId: Number(this.Assignmentform.value.studentId ?? 0), 
    ClassId: newassignment.classId,
    GradeLevelId: newassignment.gradeLevelId
  };

  this._assignmentService.add(payload).subscribe({
    next: _ => {
      this.loadassignment();
 
      this.Assignmentform.reset();
    },
    error: err => {
      console.log(err?.error?.message ?? err?.error ?? 'Unexpected error');
    }
  });
}


}

















