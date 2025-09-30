import { Routes } from '@angular/router';
import { Teacher } from './components/teacher/teacher';
import { TeacherAssignment } from './components/teacher-assignment/teacher-assignment';
export const routes: Routes = [

{path : "" ,redirectTo: '/teacher' ,pathMatch:'full'},
 { path: 'teacher', component: Teacher },
 { path: 'teacherassignment', component: TeacherAssignment },

];
