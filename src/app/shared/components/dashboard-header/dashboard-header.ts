import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-dashboard-header',
  imports: [],
  templateUrl: './dashboard-header.html',
  styleUrl: './dashboard-header.scss',
})
export class DashboardHeader {
  title = input.required<string>();
  description = input.required<string>();
  buttonLabel = input<string>();
  onClick = output();
}
