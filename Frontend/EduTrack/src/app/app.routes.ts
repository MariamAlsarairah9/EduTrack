import { Routes } from '@angular/router';
import { Teacher } from './components/teacher/teacher';
import { TeacherAttendance } from './components/teacher-attendance/teacher-attendance';
import { TeacherAssignment } from './components/teacher-assignment/teacher-assignment';
import { TeacherGrade } from './components/teacher-grade/teacher-grade';
import { Parent } from './components/parent/parent';
import { ParentAttendance } from './components/parent-attendance/parent-attendance';
import { ParentGrade } from './components/parent-grade/parent-grade';
import { Login } from './components/login/login';
import { ParentAssignment } from './components/parent-assignment/parent-assignment';
import { AdminHome } from './components/admin-home/admin-home';
import { TeacherAddStu } from './components/teacher-add-stu/teacher-add-stu';
export const routes: Routes = [

{ path: "", redirectTo: '/login', pathMatch: 'full' },
  { path: 'teacher', component: Teacher },
  { path: 'teacherAttendance', component: TeacherAttendance },
  { path: 'teacherAssignment', component: TeacherAssignment },
  { path: 'teacherGrade', component: TeacherGrade },
  { path: 'login', component: Login },
  { path: 'addStu', component: TeacherAddStu },


  { path: 'parent', component: Parent },
  { path: 'parentAttendance', component: ParentAttendance },
  { path: 'parentGrade', component: ParentGrade },
  { path: 'parenAssignment', component: ParentAssignment },


  { path: 'admin', component: AdminHome },




];

