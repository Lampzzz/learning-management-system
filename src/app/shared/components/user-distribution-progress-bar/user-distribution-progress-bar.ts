import { NgClass } from '@angular/common';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-user-distribution-progress-bar',
  imports: [NgClass],
  templateUrl: './user-distribution-progress-bar.html',
  styleUrl: './user-distribution-progress-bar.scss',
})
export class UserDistributionProgressBar {
  label = input<string>();
  value = input.required<number>();
  maxValue = input.required<number>();
  colorClass = input<string>('bg-primary');

  currentProgress = computed(() => {
    const denominator = this.maxValue();
    if (!denominator || denominator <= 0) return 0;
    return Math.min(100, Math.round((this.value() / denominator) * 100));
  });
}
