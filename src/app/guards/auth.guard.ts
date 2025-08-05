import { inject, Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token') || sessionStorage.getItem('token');
  if (token) {
    return true;
  }
  
  const router = inject(Router);
  router.navigate(['/login']);
  return false;
};