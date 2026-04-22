import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clock.html',
  styleUrl: './clock.css',
})
export class Clock implements OnInit, OnDestroy {
  Time: Date = new Date();
  timer: any;

  ngOnInit() {
      this.timer = setInterval(() => {
      this.Time = new Date();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
    console.log('clock was destroyed')
  }
}
