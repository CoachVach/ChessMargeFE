import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { StudentService } from '../../../services/student';
import { Student } from '../../../interface/Student/student';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentDialog } from './add-student-dialog/add-student-dialog';


@Component({
  selector: 'app-all-students',
  standalone: false,
  templateUrl: './all-students.html',
  styleUrls: ['./all-students.scss'],
})
export class AllStudents implements OnInit {
  studentService = inject(StudentService);
  cdr = inject(ChangeDetectorRef);

  dialog = inject(MatDialog);

  students: Student[] = [];
  loading = true;

  router = inject(Router);
  
  ngOnInit() {
    this.fetchStudents();
  }

  fetchStudents() {
    this.studentService.getAll().subscribe({
      next: (data) => {
        this.students = (data || []).sort((a, b) => a.fullName.localeCompare(b.fullName));
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  getInitials(name: string) {
    if (!name) return '';
    const parts = name.split(' ').filter(Boolean);
    return (parts[0]?.charAt(0) || '') + (parts[parts.length - 1]?.charAt(0) || '').toUpperCase();
  }

  goToStudent(id: string) {
    this.router.navigate(['/students', id]);
  }

  openAddStudentDialog() {
    const dialogRef = this.dialog.open(AddStudentDialog, {
        width: '400px'
    });
    dialogRef.afterClosed().subscribe(result => {
        if (result === 'refresh') {
        this.fetchStudents();
        }
    });
    }
}