import { Component, inject } from '@angular/core';
import { AuthLayout } from '../../../shared/components/layout/auth-layout/auth-layout';
import { RouterLink } from '@angular/router';
import { UsersService } from '../../../services/users/users';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [AuthLayout, RouterLink, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private users = inject(UsersService);

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.min(6)]),
  });

  handleSubmit() {
    console.log(this.loginForm.value);
  }
}
