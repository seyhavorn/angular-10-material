import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavList } from '../data/nav-list.data';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  loading: boolean = true;
  navList: { title: string; route: string }[] = [];
  constructor() {}

  ngOnInit() {
    this.navList = NavList;
  }
}
