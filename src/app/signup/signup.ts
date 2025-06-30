import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from '../services/users';
import { SignUp } from '../data-type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule, FormsModule, CommonModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup implements OnInit {
  constructor(private user: Users, private router: Router) {}

  loginError = false;
  showLogin = false;

  ngOnInit() {
    this.user.isLoginError.subscribe((isError) => {
      this.loginError = isError;
    });
  }

  signup(data: SignUp, form: NgForm): void {
    if (form.invalid) {
      // Mark all fields touched so validation messages appear
      Object.values(form.controls).forEach((control) => {
        control.markAsTouched();
      });
      return;
    }

    this.user.userSignUp(data);
    form.reset();
  }

  login(data: SignUp, form: NgForm) {
    if (form.invalid) {
      Object.values(form.controls).forEach((control) => {
        control.markAsTouched();
      });
      return;
    }

    this.user.userLogin(data);
    form.reset();
  }

  // for controlin login and signup form
  openLogin() {
    this.showLogin = true;
  }

  openSignUp() {
    this.showLogin = false;
  }
}
