import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponentModel } from '../models/menuComponent.model';

@Component({
  selector: 'pr-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements MenuComponentModel {
  navbarCollapsed = true;

  toggleNavbar() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }
}
