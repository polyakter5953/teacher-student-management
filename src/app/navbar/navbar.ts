import { Component } from '@angular/core';
import { RouterModule, Router, RouterLink } from '@angular/router';
import { Users } from '../services/users';
import { TeacherSection } from '../teacher-section/teacher-section';
import { CommonModule } from '@angular/common';
import { StudentSection } from '../student-section/student-section';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    RouterLink,
    TeacherSection,
    StudentSection,
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  constructor(private router: Router, private user: Users) {}

  logout() {
    localStorage.removeItem('user');
    this.user.isUserLoggedIn.next(false);
    this.router.navigate(['/header']);
  }
}
