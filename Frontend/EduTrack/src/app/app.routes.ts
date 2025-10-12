import { Routes } from '@angular/router';
import { Teacher } from './components/teacher/teacher';
import { TeacherAttendance } from './components/teacher-attendance/teacher-attendance';
import { TeacherAssignment } from './components/teacher-assignment/teacher-assignment';
import { TeacherGrade } from './components/teacher-grade/teacher-grade';
import { Login } from './components/login/login';
export const routes: Routes = [

{path : "" ,redirectTo: '/teacher' ,pathMatch:'full'},
{ path: 'teacher', component: Teacher },
{ path: 'teacherAttendance', component:TeacherAttendance },

 
 { path: 'teacherassignment', component: TeacherAssignment },
  { path: 'teacherGrade', component: TeacherGrade },
 { path: 'login', component: Login },


];
