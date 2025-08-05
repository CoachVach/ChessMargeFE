import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ChessClassService } from '../../../services/chess-class';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-add-class-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './add-class-dialog.html',
  styleUrls: ['./add-class-dialog.scss']
})
export class AddClassDialog {
  id?: string;
  title = '';
  type: 'individual' | 'group' = 'individual';
  date: Date;
  startTime = '';
  endTime = '';
  location = '';
  notes = '';
  loading = false;
  errorMsg = '';
  isEdit = false;

  constructor(
    private dialogRef: MatDialogRef<AddClassDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private classService: ChessClassService
  ) {
    if (data && data.session) {
      this.isEdit = true;
      const session = data.session;
      this.id = session.id;
      this.title = session.title;
      this.type = session.type;
      this.date = new Date(session.startTime);
      this.startTime = this.dateToTimeString(session.startTime);
      this.endTime = this.dateToTimeString(session.endTime);
      this.location = session.location || '';
      this.notes = session.notes || '';
    } else {
      this.isEdit = false;
      this.date = data?.defaultDate ? new Date(data.defaultDate) : new Date();
    }
  }

  private dateToTimeString(d: Date | string): string {
    const date = new Date(d);
    const hh = String(date.getHours()).padStart(2, '0');
    const mm = String(date.getMinutes()).padStart(2, '0');
    return `${hh}:${mm}`;
  }

  onSubmit() {
    this.errorMsg = '';
    if (!this.title || !this.date || !this.startTime || !this.endTime) {
      this.errorMsg = 'Completa todos los campos obligatorios';
      return;
    }
    this.loading = true;

    const [startHour, startMin] = this.startTime.split(':').map(Number);
    const [endHour, endMin] = this.endTime.split(':').map(Number);
    const day = new Date(this.date);
    const start = new Date(day.setHours(startHour, startMin, 0, 0));
    const end = new Date(this.date);
    end.setHours(endHour, endMin, 0, 0);

    const dataToSend: any = {
      title: this.title,
      type: this.type,
      startTime: start.toISOString(),
      endTime: end.toISOString(),
      location: this.location,
      notes: this.notes,
      userId: "fd462361-9a27-4043-82bf-f290044b2d60",
    };
    if (this.isEdit && this.id) {
      dataToSend.id = this.id;
      this.classService.update(this.id, dataToSend).subscribe({
        next: () => {
          this.loading = false;
          this.dialogRef.close('refresh');
        },
        error: () => {
          this.loading = false;
          this.errorMsg = 'No se pudo actualizar la clase (verifica datos y conexión)';
        }
      });
    } else {
      this.classService.create(dataToSend).subscribe({
        next: () => {
          this.loading = false;
          this.dialogRef.close('refresh');
        },
        error: () => {
          this.loading = false;
          this.errorMsg = 'No se pudo crear la clase (verifica datos y conexión)';
        }
      });
    }
  }

  onDelete() {
    if (!this.id) return;
    this.loading = true;
    this.classService.delete(this.id).subscribe({
      next: () => {
        this.loading = false;
        this.dialogRef.close('deleted');
        window.location.reload();
      },
      error: () => {
        this.loading = false;
        this.errorMsg = 'No se pudo eliminar la clase (verifica conexión)';
      }
    });
  }

  onCancel() {
    this.dialogRef.close();
  }
}