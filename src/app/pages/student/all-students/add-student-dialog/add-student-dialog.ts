import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { StudentService } from '../../../../services/student';


@Component({
  selector: 'app-add-student-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule
  ],
  templateUrl: './add-student-dialog.html',
  styleUrls: ['./add-student-dialog.scss']
})
export class AddStudentDialog {
  dialogRef = inject(MatDialogRef<AddStudentDialog>);
  studentService = inject(StudentService);

  form = {
    fullName: '',
    email: '',
    phoneNumber: '',
    birthdate: null as Date | null,
    notes: '',
    eloFIDE: null as number | null,
    eloOnline: null as number | null
  };
  loading = false;
  error: string = '';

  submit() {
    if (!this.form.fullName.trim()) {
      this.error = 'El nombre es requerido.';
      return;
    }
    this.loading = true;
    this.studentService.create({
      fullName: this.form.fullName,
      email: this.form.email,
      phoneNumber: this.form.phoneNumber,
      birthdate: this.form.birthdate,
      notes: this.form.notes,
      eloFIDE: this.form.eloFIDE,
      eloOnline: this.form.eloOnline
    }).subscribe({
      next: () => {
        this.loading = false;
        this.dialogRef.close('refresh');
      },
      error: () => {
        this.error = 'No se pudo crear el estudiante. Intente más tarde.';
        this.loading = false;
      }
    });
  }

  close() {
    this.dialogRef.close();
  }
}