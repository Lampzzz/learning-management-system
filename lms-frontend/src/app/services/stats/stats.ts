import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, combineLatest } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatsService {
  private http = inject(HttpClient);
  private usersEndpoint = 'http://localhost:3000/users';
  private coursesEndpoint = 'http://localhost:3000/courses';

  index() {
    const users$ = this.http.get<User[]>(this.usersEndpoint);
    const courses$ = this.http.get<Course[]>(this.coursesEndpoint);

    const allUsersCount$ = users$.pipe(map((users) => users.length));
    const instructorsCount$ = users$.pipe(
      map((users) => users.filter((u) => u.role === 'instructor').length)
    );
    const studentsCount$ = users$.pipe(
      map((users) => users.filter((u) => u.role === 'student').length)
    );
    const adminsCount$ = users$.pipe(
      map((users) => users.filter((u) => u.role === 'admin').length)
    );
    const coursesCount$ = courses$.pipe(map((courses) => courses.length));

    return combineLatest({
      all_users: allUsersCount$,
      instructors: instructorsCount$,
      students: studentsCount$,
      admins: adminsCount$,
      courses: coursesCount$,
    });
  }
}
