import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home-module').then(m => m.HomeModule)
  },
  {
    path: 'students',
    canActivate: [authGuard], 
    loadChildren: () =>
      import('./pages/student/student-module').then(m => m.StudentModule)
  },
  { path: 'dashboard', 
    canActivate: [authGuard], 
    loadComponent: () => 
      import('./pages/dashboard/dashboard').then(m => m.Dashboard) 
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./auth/auth-module').then(m => m.AuthModule)
  },
];
