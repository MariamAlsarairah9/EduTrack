import { Routes } from '@angular/router';
import { Teacher } from './components/teacher/teacher';
export const routes: Routes = [

{path : "" ,redirectTo: '/teacher' ,pathMatch:'full'},
 { path: 'teacher', component: Teacher },

];
