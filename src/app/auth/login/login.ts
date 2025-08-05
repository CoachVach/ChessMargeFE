import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// Material
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
  imports: [
    FormsModule, CommonModule,
    MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatCardModule
  ]
})
export class Login {
  email = '';
  password = '';
  showPassword = false;
  errorMessage = '';

  constructor(private authService: AuthService, 
              private router: Router,
              private cdr: ChangeDetectorRef) {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    this.errorMessage = "";
    this.authService.login(this.email, this.password).subscribe({
      next: () => { this.router.navigate(['/dashboard']); },
      error: () => { 
        this.errorMessage = 'Credenciales incorrectas'; 
        this.cdr.detectChanges();}
    });
  }
}