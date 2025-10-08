import { Component } from '@angular/core';
import { TeacherInterface } from '../../interfaces/teacher-interface';
import { TeacherService } from '../../services/teacher.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-teacher',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './teacher.html',
  styleUrl: './teacher.css'
})
export class Teacher {
  constructor(private _TeacherService: TeacherService) { }

  teacher: TeacherInterface | null = null;  // مش مصفوفة

  ngOnInit() {

    this.techerinfo(5);

  }

  techerinfo(id: number) {

    this._TeacherService.GetTeacher(id).subscribe({
      next: (res: any) => {
        
        this.teacher = res;
      },
       error: err => {// failed request | 400 , 500
        console.log(err.error.message ?? err.error ?? "Unexpected Error");
      }



    })
  }

  






}
