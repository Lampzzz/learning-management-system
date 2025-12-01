import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'auth-layout',
  imports: [CardModule],
  templateUrl: './auth-layout.html',
  styleUrl: './auth-layout.scss',
})
export class AuthLayout {}
