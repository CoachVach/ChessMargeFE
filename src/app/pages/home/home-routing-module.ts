import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { ClassDetail } from './class-detail/class-detail';
import { CourseDetail } from './course-detail/course-detail';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'class-detail', component: ClassDetail },
  { path: 'course-detail', component: CourseDetail }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

