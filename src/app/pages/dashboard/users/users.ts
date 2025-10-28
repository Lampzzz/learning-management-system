import { Component } from '@angular/core';
import { DashboardHeader } from '../../../shared/components/dashboard-header/dashboard-header';

@Component({
  selector: 'app-users',
  imports: [DashboardHeader],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users {}
