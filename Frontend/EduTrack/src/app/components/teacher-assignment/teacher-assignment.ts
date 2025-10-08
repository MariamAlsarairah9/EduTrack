
import { RouterOutlet } from '@angular/router';
import { FormsModule } from "@angular/forms";


import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Assignment } from '../../interfaces/assignment-interfaces';
import { CommonModule, DatePipe } from '@angular/common';
import { AssignmentService } from '../../services/assignment.service';


@Component({
  selector: 'app-teacher-assignment',
  imports: [RouterOutlet, FormsModule,ReactiveFormsModule, CommonModule],
  templateUrl: './teacher-assignment.html',
  styleUrls: ['./teacher-assignment.css'],
  standalone: true,
  providers: [DatePipe],
})
export class TeacherAssignment {









  @ViewChild('closeButton') closeButton?: ElementRef<HTMLButtonElement>;// Quickfix or eng

  constructor(
    private datePipe: DatePipe, 
    private _assignmentService: AssignmentService
  ) {}

  teacherassignment: Assignment[] = [
 
  ];

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


}

















