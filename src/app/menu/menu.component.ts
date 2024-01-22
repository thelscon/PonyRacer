import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuModel } from '../model/menu.model';

@Component({
  selector: 'pr-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements MenuModel {
  navbarCollapsed = true;

  toggleNavbar() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }
}
