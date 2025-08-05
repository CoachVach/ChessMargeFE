import { ChangeDetectorRef, Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../../services/student';
import { Student } from '../../../interface/Student/student';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './student-profile.html',
  styleUrls: ['./student-profile.scss'],
})
export class StudentProfile implements OnInit {
  @Input() student: Student | null = null;

  cdr = inject(ChangeDetectorRef);

  route = inject(ActivatedRoute);
  service = inject(StudentService);

  ngOnInit() {
    if (!this.student) {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.service.getById(id).subscribe(s => {
          this.student = s;
          this.cdr.detectChanges();
        });
      }
    }
  }

  getInitials(name: string) {
    if (!name) return '';
    const parts = name.split(' ').filter(Boolean);
    return (parts[0]?.charAt(0) || '') + (parts[parts.length - 1]?.charAt(0) || '').toUpperCase();
  }
}