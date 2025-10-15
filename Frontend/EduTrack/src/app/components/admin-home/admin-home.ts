import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ParentService } from '../../services/parent.service';
import { TeacherService } from '../../services/teacher.service';
import { ParentInterface } from '../../interfaces/parent-interface';
import { TeacherInterface } from '../../interfaces/teacher-interface';

@Component({
  selector: 'app-admin-home',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './admin-home.html',
  styleUrl: './admin-home.css'
})
export class AdminHome {


  constructor(private _ParentService: ParentService,
    private _TeacherService: TeacherService
  ) { }


  SaveUserForm: FormGroup = new FormGroup({
    Name: new FormControl(null, [Validators.required]),
    Email: new FormControl(null, [Validators.required]),
    Phone: new FormControl(null, [Validators.required]),

  })




  addTeacher() {

    if (this.SaveUserForm.invalid) {
      this.SaveUserForm.markAllAsTouched();
      return;
    }

    let teacher = {
      name: this.SaveUserForm.value.Name,
      email: this.SaveUserForm.value.Email,
      phone: this.SaveUserForm.value.Phone,

    };

    this._TeacherService.add(teacher).subscribe({
      next: (res: any) => {
        alert('Teacher added successfully!');
        this.SaveUserForm.reset();
      },
      error: err => {
        console.error(err);
        alert('Error adding Teacher');
      }
    });
  }

  
  addParent() {

    if (this.SaveUserForm.invalid) {
      this.SaveUserForm.markAllAsTouched();
      return;
    }

    let parent = {
      name: this.SaveUserForm.value.Name,
      email: this.SaveUserForm.value.Email,
      phone: this.SaveUserForm.value.Phone,

    };

    this._ParentService.add(parent).subscribe({
      next: (res: any) => {
        alert('Parent added successfully!');
        this.SaveUserForm.reset();
      },
      error: err => {
        console.error(err);
        alert('Error adding Parent');
      }
    });
  }



}
