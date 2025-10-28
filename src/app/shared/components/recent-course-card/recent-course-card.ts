import { Component, input } from '@angular/core';

@Component({
  selector: 'app-recent-course-card',
  imports: [],
  templateUrl: './recent-course-card.html',
  styleUrl: './recent-course-card.scss',
})
export class RecentCourseCard {
  title = input<string>();
  creator = input<string>();
  lessonCount = input<number>();
}
