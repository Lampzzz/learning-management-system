import { Routes } from '@angular/router';
import { Register } from './pages/auth/register/register';
import { Login } from './pages/auth/login/login';
import { MainLayout } from './shared/components/layout/main-layout/main-layout';

export const routes: Routes = [
  {
    path: 'register',
    component: Register,
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./pages/dashboard/overview/overview').then((m) => m.Overview),
      },
      {
        path: 'users',
        loadComponent: () => import('./pages/dashboard/users/users').then((m) => m.Users),
      },
      {
        path: 'courses',
        loadComponent: () => import('./pages/dashboard/courses/courses').then((m) => m.Courses),
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];
