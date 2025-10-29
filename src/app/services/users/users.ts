import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private http = inject(HttpClient);
  private endpoint = 'http://localhost:3000/users';

  create(payload: User) {
    const userId = Date.now().toString();
    const created_at = new Date();
    return this.http.post(this.endpoint, { userId, ...payload, created_at });
  }

  index() {
    return this.http.get<User[]>(this.endpoint);
  }

  delete(id: string) {
    return this.http.delete<User[]>(this.endpoint + '/' + id);
  }
}
