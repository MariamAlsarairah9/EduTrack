import { Routes } from '@angular/router';
import { Teacher } from './components/teacher/teacher';
import { TeacherAttendance } from './components/teacher-attendance/teacher-attendance';
export const routes: Routes = [

{path : "" ,redirectTo: '/teacher' ,pathMatch:'full'},
{ path: 'teacher', component: Teacher },
{ path: 'teacherAttendance', component:TeacherAttendance },


];
