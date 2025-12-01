import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-stats-card',
  imports: [NgClass],
  templateUrl: './stats-card.html',
  styleUrl: './stats-card.scss',
})
export class StatsCard {
  label = input.required<string>();
  value = input.required<number>();
  bgColor = input.required<string>();
  icon = input.required<string>();
}
