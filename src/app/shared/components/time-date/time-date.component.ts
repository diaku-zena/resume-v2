import { AsyncPipe, DatePipe, NgIf } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, OnDestroy, OnInit, Signal, WritableSignal, afterNextRender, computed, effect, signal } from '@angular/core';
import { Observable, Subscription, interval, map, repeat, take, timer } from 'rxjs';
import { currentTime, rotateClockHands } from './clock.operator';

@Component({
  selector: 'app-time-date',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
  ],
  templateUrl: './time-date.component.html',
  styleUrl: './time-date.component.scss',
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimeDateComponent {
  time: string = '';
  date: string = '';

  ngOnInit() {
    this.updateTimeAndDate();
    
  }

  constructor() {
    afterNextRender(() => {
    setInterval(() => this.updateTimeAndDate(), 1000);
    });
    
  }

  private updateTimeAndDate() {
    const now = new Date();
    this.time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    this.date = now.toLocaleDateString([], { day: '2-digit', month: '2-digit', year: 'numeric' });
  }

  readonly oneSecond = 1000;

  // clockHandsTransform$ = timer(0, this.oneSecond)
  //   .pipe(
  //     currentTime(),
  //     rotateClockHands(),
  //   );
  
  
}