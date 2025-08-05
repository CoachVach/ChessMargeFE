import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe, DatePipe } from '@angular/common';
import { HomePage } from './home-page/home-page';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HomeRoutingModule } from './home-routing-module';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { ClassDetail } from './class-detail/class-detail';
import { CourseDetail } from './course-detail/course-detail';

@NgModule({
  declarations: [
    HomePage,
    ClassDetail,
    CourseDetail
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatIcon
  ],
  providers: [
    TitleCasePipe,
    DatePipe
  ]
})
export class HomeModule { }
