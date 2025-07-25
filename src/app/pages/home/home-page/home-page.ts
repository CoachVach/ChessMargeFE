import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.scss'],
  standalone: false
})
export class HomePage implements AfterViewInit {
  ngAfterViewInit() {
    // CSS animations via class handle all!
  }
}