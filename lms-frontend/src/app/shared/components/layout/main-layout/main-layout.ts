import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarLinks } from '../../sidebar-links/sidebar-links';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, SidebarLinks],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {}
