import { Component } from '@angular/core';
import { DashboardHeader } from '../../../shared/components/dashboard-header/dashboard-header';

@Component({
  selector: 'app-courses',
  imports: [DashboardHeader],
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
})
export class Courses {}
