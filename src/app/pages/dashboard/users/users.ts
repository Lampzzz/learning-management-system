import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from '../../../services/users/users';
import { DashboardHeader } from '../../../shared/components/dashboard-header/dashboard-header';
import { Modal } from '../../../shared/components/modal/modal';

@Component({
  selector: 'app-users',
  imports: [DashboardHeader, Modal, ReactiveFormsModule],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users {
  private usersService = inject(UsersService);

  data = signal<User[] | null>(null);

  createUserForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('@gmail.com', [Validators.required]),
    password: new FormControl('password', [Validators.required]),
    role: new FormControl('student', [Validators.required]),
  });

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

  handleSubmit() {
    this.usersService.create(this.createUserForm.value as User).subscribe({
      next: () => this.createUserForm.reset(),
      error: (error) => console.log('Error: ', error),
    });
  }

  deleteUser(id: string) {
    this.usersService.delete(id).subscribe({
      next: () => console.log('success delete'),
      error: (error) => console.log('Error: ', error),
    });
  }
}
