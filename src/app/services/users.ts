import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Signup } from '../signup/signup';
import { logIn, SignUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Users {
  // RxJS BehaviorSubject<boolean>
  isUserLoggedIn = new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {}

  // signup e SignUp type data jabe
  userSignUp(data: SignUp) {
    this.http
      .post(
        'https://student-teacher-management-server-rcv8.onrender.com/user',
        data,
        { observe: 'response' }
      )
      .subscribe((result) => {
        // console.warn(result)
        if (result) {
          localStorage.setItem('user', JSON.stringify(result));
          this.isUserLoggedIn.next(true);
          this.router.navigate(['homepage']);
        }
      });
  }

  // reloadUser(){
  //   if(localStorage.getItem('user')){
  //     // there can be an error
  //     this.isUserLoggedIn.next(true);
  //     this.router.navigate(['homepage'])
  //   }
  // }

  // login e logIn type data jabe
  userLogin(data: logIn) {
    console.warn(data);
    // api call code will be here
    this.http
      .get(
        `https://student-teacher-management-server-rcv8.onrender.com/user?email=${data.email}&password=${data.password}`,
        { observe: 'response' }
      )
      .subscribe((result: any) => {
        // console.log(result);
        // console.warn(result);
        if (result && result.body && result.body.length) {
          localStorage.setItem('user', JSON.stringify(result[0]));
          console.warn('user logged in!');
          this.isUserLoggedIn.next(true);
          this.router.navigate(['homepage']);
        } else {
          console.warn('login Failed!!');
          this.isLoginError.next(true);
        }
      });
  }

  logout() {
    localStorage.removeItem('user');
    this.isUserLoggedIn.next(false);
  }

  reloadUser() {
    const userData = localStorage.getItem('user');
    if (userData) {
      this.isUserLoggedIn.next(true);
    } else {
      this.isUserLoggedIn.next(false);
    }
  }
}
