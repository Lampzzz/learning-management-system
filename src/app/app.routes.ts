import { Routes } from '@angular/router';
import { Register } from './pages/auth/register/register';
import { Login } from './pages/auth/login/login';

export const routes: Routes = [
  {
    path: 'register',
    component: Register,
  },
  {
    path: 'login',
    component: Login,
  },
];
