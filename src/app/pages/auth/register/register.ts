import { Component, effect, inject } from '@angular/core';
import { AuthLayout } from '../../../shared/components/layout/auth-layout/auth-layout';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../../services/users/users';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [AuthLayout, ButtonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  private users = inject(UsersService);

  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.min(6)]),
    role: new FormControl('student'),
  });

  handleSubmit() {
    if (this.registerForm.valid) {
      this.users.create(this.addUser(this.registerForm.value as User)).subscribe({
        next: () => {
          console.log('success');
          this.registerForm.reset();
        },
        error: (error) => console.log('error: ', error),
      });
    }
  }

  addUser(values: Partial<User>) {
    return {
      ...values,
      id: Date.now().toString(),
    } as User;
  }
}
