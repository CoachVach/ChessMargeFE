import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllStudents } from './all-students/all-students';
import { StudentProfile } from './student-profile/student-profile';

const routes: Routes = [
  { 
    path: '', 
    component: AllStudents },
  {
    path: ':id',
    component: StudentProfile
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }

