import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private http = inject(HttpClient);
  private endpoint = 'http://localhost:3000/users';

  create(payload: User) {
    return this.http.post(this.endpoint, payload);
  }
}
