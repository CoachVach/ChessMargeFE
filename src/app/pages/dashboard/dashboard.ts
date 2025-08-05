import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { ChessClassService } from '../../services/chess-class';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AddClassDialog } from './add-class-dialog/add-class-dialog';
import { ClassSession } from '../../interface/Class/class-session';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AddClassDialog,
    MatTooltipModule
  ],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'],
})
export class Dashboard implements OnInit {

  constructor(private cdr: ChangeDetectorRef) {}
  chessClassService = inject(ChessClassService);
  dialog = inject(MatDialog);

  classSessions: ClassSession[] = [];
  weekDays: Date[] = [];
  today = new Date();
  loading = true;

  toNativeDate(val: any): Date {
    if (val instanceof Date) return val;
    const d = new Date(val);
    if (isNaN(d.getTime())) {
      console.error('Invalid date:', val);
      return new Date();
    }
    return d;
  }

  ngOnInit(): void {
    this.fetchClasses();
    this.calculateCurrentWeek();
    setInterval(() => {
      this.today = new Date();
      this.cdr.detectChanges();
    }, 60 * 1000);
  }

  calculateCurrentWeek(): void {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dayOfWeek = today.getDay();
    const monday = new Date(today);
    const diff = today.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
    monday.setDate(diff);

    this.weekDays = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(monday);
      d.setDate(monday.getDate() + i);
      d.setHours(0, 0, 0, 0);
      this.weekDays.push(d);
    }
  }

  fetchClasses(): void {
    this.chessClassService.getAll().subscribe({
      next: (sessionsRaw: any[]) => {
        const sessions: ClassSession[] = (sessionsRaw || []).map((s: any) => ({
          ...s,
          startTime: this.toNativeDate(s.startTime),
          endTime: this.toNativeDate(s.endTime),
        }));

        this.classSessions = sessions.filter((s) =>
          this.isSameWeek(
            this.toNativeDate(s.startTime),
            this.toNativeDate(this.weekDays[0])
          )
        );
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  isSameDay(d1: Date, d2: Date): boolean {
    d1 = this.toNativeDate(d1);
    d2 = this.toNativeDate(d2);
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  }

  isSameWeek(date: Date, weekStart: Date): boolean {
    date = this.toNativeDate(date);
    weekStart = this.toNativeDate(weekStart);
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekEnd.getDate() + 7);
    return date >= weekStart && date < weekEnd;
  }

  getSessionsByDay(day: Date): ClassSession[] {
    day = this.toNativeDate(day);
    return this.classSessions.filter((s) =>
      this.isSameDay(this.toNativeDate(s.startTime), day)
    );
  }

  openAddClassDialog(): void {
    const dialogRef = this.dialog.open(AddClassDialog, {
      width: '350px',
      data: { defaultDate: this.today },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'refresh') {
        this.fetchClasses();
      }
    });
  }

  calendarTimes = Array.from({ length: 15 }, (_, i) => {
    const hour = 9 + i;
    return (hour < 10 ? `0${hour}` : hour) + ':00';
  });

  getClassCardStyle(s: ClassSession): any {
    const start: Date = this.toNativeDate(s.startTime);
    const end: Date = this.toNativeDate(s.endTime);

    const calStartHour = 9;
    const hourHeight = 60;
    const startHour = start.getHours() + start.getMinutes() / 60;
    const endHour = end.getHours() + end.getMinutes() / 60;
    const topPx = (startHour - calStartHour) * hourHeight;
    const heightPx = Math.max((endHour - startHour) * hourHeight, 34);

    return {
      top: `${topPx}px`,
      height: `${heightPx}px`,
    };
  }

  doesOverlap(s: ClassSession, day: Date): boolean {
    const others = this.getSessionsByDay(day).filter((o) => o !== s);
    const sStart = this.toNativeDate(s.startTime).getTime();
    const sEnd = this.toNativeDate(s.endTime).getTime();

    return others.some(
      (o) =>
        this.toNativeDate(o.startTime).getTime() < sEnd &&
        this.toNativeDate(o.endTime).getTime() > sStart
    );
  }

  openEditClassDialog(session: ClassSession): void {
    const dialogRef = this.dialog.open(AddClassDialog, {
      width: '350px',
      data: { session }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'refresh') {
        this.fetchClasses();
      }
    });
  }

  nextWeek() {
    if (!this.weekDays[0]) return;
    const nextMonday = new Date(this.weekDays[0]);
    nextMonday.setDate(nextMonday.getDate() + 7);
    this.setWeekFromMonday(nextMonday);
  }
  prevWeek() {
    if (!this.weekDays[0]) return;
    const prevMonday = new Date(this.weekDays[0]);
    prevMonday.setDate(prevMonday.getDate() - 7);
    this.setWeekFromMonday(prevMonday);
  }
  goToToday() {
    this.calculateCurrentWeek();
    this.fetchClasses();
  }
  isCurrentWeek(): boolean {
    const todayMonday = new Date(this.today);
    const dayOfWeek = todayMonday.getDay();
    todayMonday.setDate(todayMonday.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));
    todayMonday.setHours(0,0,0,0);
    return this.weekDays[0] && this.isSameDay(this.weekDays[0], todayMonday);
  }

  private setWeekFromMonday(monday: Date) {
    this.weekDays = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(monday);
      d.setDate(monday.getDate() + i);
      d.setHours(0, 0, 0, 0);
      this.weekDays.push(d);
    }
    this.fetchClasses();
  }

  getCurrentHourLineStyle(day: Date): any {
    if (!this.isSameDay(day, this.today)) { return { display: 'none' }; }
    const now = new Date();
    const calendarStartHour = 9;
    const calendarEndHour = 23;
    if (now.getHours() < calendarStartHour || now.getHours() >= calendarEndHour) {
      return { display: 'none' };
    }
    const hourHeight = 60;
    const hour = now.getHours() + now.getMinutes() / 60;
    const topPx = (hour - calendarStartHour) * hourHeight;
    return {
      top: `${topPx}px`
    };
  }
}