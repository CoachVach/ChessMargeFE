import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.html',
  styleUrls: ['./class-detail.scss'],
  standalone: false
})
export class ClassDetail implements AfterViewInit {
  ngAfterViewInit() {
    // CSS animations via class handle all!
  }
}