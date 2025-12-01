import { Component } from '@angular/core';
import { SIDEBAR_LINKS } from '../../config/sidebar-links';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar-links',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar-links.html',
  styleUrl: './sidebar-links.scss',
})
export class SidebarLinks {
  readonly links = SIDEBAR_LINKS;
}
