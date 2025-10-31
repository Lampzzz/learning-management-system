import { Component, inject, signal, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../../../services/users/users';
import { DashboardHeader } from '../../../shared/components/dashboard-header/dashboard-header';
import { UserEditor } from '../../../shared/users/editor/editor';

@Component({
  selector: 'app-users',
  imports: [DashboardHeader, ReactiveFormsModule, UserEditor],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users {
  @ViewChild('user_editor') userEditor!: UserEditor;
  private usersService = inject(UsersService);

  data = signal<User[] | null>(null);

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.usersService.index().subscribe({
      next: (value) => {
        this.data.set(value);
      },
      error: (error) => console.log('Error: ', error),
    });
  }

  deleteUser(id: string) {
    this.usersService.delete(id).subscribe({
      next: () => console.log('success delete'),
      error: (error) => console.log('Error: ', error),
    });
  }

  setUserData(user: User) {
    this.userEditor.setUserData(user);
  }
}
