import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { forkJoin, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:3000';

  getCourses() {
    return forkJoin({
      courses: this.http.get<Course[]>(`${this.baseUrl}/courses`),
      users: this.http.get<User[]>(`${this.baseUrl}/users`),
      lessons: this.http.get<Lesson[]>(`${this.baseUrl}/lessons`),
    }).pipe(
      map(({ courses, users, lessons }) =>
        courses.map<CourseWithRelations>((c) => ({
          ...c,
          creator: users.find((u) => u.id === c.creator_id),
          lessons: lessons
            .filter((l) => l.course_id === c.id)
            .map<Lesson>((l) => ({
              id: l.id,
              course_id: l.course_id,
              title: l.title,
              content: l.content,
              link: l.link,
            })),
        }))
      )
    );
  }
}
