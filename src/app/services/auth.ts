import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;

  login() {
    this.isLoggedIn = true;
    localStorage.setItem('loggedIn', 'true');
  }

  logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('loggedIn');
  }

  checkLogin(): boolean {
    const status = localStorage.getItem('loggedIn');
    return status === 'true';
  }
}
