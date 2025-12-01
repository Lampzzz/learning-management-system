import { Component, inject, signal, OnInit } from '@angular/core';
import { DashboardHeader } from '../../../shared/components/dashboard-header/dashboard-header';
import { StatsService } from '../../../services/stats/stats';
import { StatsCard } from '../../../shared/components/stats-card/stats-card';
import { CoursesService } from '../../../services/courses/courses';
import { RecentCourseCard } from '../../../shared/components/recent-course-card/recent-course-card';
import { UserDistributionProgressBar } from '../../../shared/components/user-distribution-progress-bar/user-distribution-progress-bar';

interface StatCard {
  label: string;
  value: number;
  icon: string;
  backgroundColor: string;
}

interface StatsData {
  all_users: number;
  instructors: number;
  students: number;
  admins: number;
  courses: number;
}

interface StatConfig {
  key: keyof StatsData;
  label: string;
  icon: string;
  backgroundColor: string;
  value: number;
}

@Component({
  selector: 'app-overview',
  imports: [DashboardHeader, StatsCard, RecentCourseCard, UserDistributionProgressBar],
  templateUrl: './overview.html',
  styleUrl: './overview.scss',
})
export class Overview implements OnInit {
  private statsService = inject(StatsService);
  private coursesService = inject(CoursesService);

  stats = signal<StatCard[]>([]);
  statsCount = signal<StatsData>({
    all_users: 0,
    instructors: 0,
    students: 0,
    admins: 0,
    courses: 0,
  });
  recentCourses = signal<CourseWithRelations[]>([]);

  private statConfig: StatConfig[] = [
    {
      key: 'all_users',
      label: 'Total Users',
      icon: 'bi-people',
      backgroundColor: 'bg-primary',
      value: 0,
    },
    {
      key: 'instructors',
      label: 'Instructors',
      icon: 'bi-mortarboard',
      backgroundColor: 'bg-success',
      value: 0,
    },
    {
      key: 'students',
      label: 'Students',
      icon: 'bi-person',
      backgroundColor: 'bg-warning',
      value: 0,
    },
    {
      key: 'courses',
      label: 'Courses',
      icon: 'bi-book',
      backgroundColor: 'bg-info',
      value: 0,
    },
  ];

  ngOnInit() {
    this.statsService.index().subscribe((data) => {
      const mappedStats = this.statConfig.map((config) => ({
        label: config.label,
        value: data[config.key],
        icon: config.icon,
        backgroundColor: config.backgroundColor,
      }));

      this.statsCount.set(data);
      this.stats.set(mappedStats);
    });

    this.coursesService.getCourses().subscribe({
      next: (data) => this.recentCourses.set(data),
      error: (error) => console.log(error),
    });
  }
}
