import { Component } from '@angular/core';
import { TeacherInterface } from '../../interfaces/teacher-interface';
import { TeacherService } from '../../services/teacher.service';


@Component({
  selector: 'app-teacher',
    standalone: true,
  imports: [],
  templateUrl: './teacher.html',
  styleUrl: './teacher.css'
})
export class Teacher  {
  constructor(private _TeacherService: TeacherService) { }

  teacher: TeacherInterface | null = null;  // مش مصفوفة

ngOnInit(){

this.techerinfo(4);

}

  techerinfo(id : number) {
  
    this._TeacherService.GetTeacher(id).subscribe({
      next: (res: any) => {
        console.log('Teacher Data:', res); // اختبر هل البيانات وصلت
        this.teacher = res;
      },
      error: (err) => {
        console.error('Error fetching teacher:', err);
      }


    })
  }








}
