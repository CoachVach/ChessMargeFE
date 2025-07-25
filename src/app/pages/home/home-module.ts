import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe, DatePipe } from '@angular/common';
import { HomePage } from './home-page/home-page';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HomeRoutingModule } from './home-routing-module';
import { MatIcon } from '@angular/material/icon';

@NgModule({
  declarations: [HomePage],
  imports: [
    HomeRoutingModule,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIcon
  ],
  providers: [
    TitleCasePipe,
    DatePipe
  ]
})
export class HomeModule { }
