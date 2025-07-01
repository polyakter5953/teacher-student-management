import { Component, OnInit } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { Signup } from '../signup/signup';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, RouterModule, RouterOutlet, Signup],
  templateUrl: './header.html',
  styleUrl: './header.css',
  // standalone: true
})
export class Header implements OnInit {
  constructor(public router: Router) {
    console.log('AppHeader Constructor');
  }

  // isOpeningPage(): boolean {
  //   return this.router.url === '/' || this.router.url === '/header';
  // }

  ngOnInit(): void {
    console.log('AppHeader OnInit');
  }
}
