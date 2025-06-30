import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { Header } from './header/header';
import { Signup } from './signup/signup';
import { FormsModule } from '@angular/forms';
import {  OnInit } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { TeacherSection } from './teacher-section/teacher-section';
import { StudentInformation } from './student-information/student-information';
import { TeacherInformation } from './teacher-information/teacher-information';
import { Users } from './services/users';
import { AddTeacher } from './add-teacher/add-teacher';
import { AddStudent } from './add-student/add-student';
import { UpdateTeacher } from './update-teacher/update-teacher';
import { UpdateStudent } from './update-student/update-student';
import { TeacherDetails } from './teacher-details/teacher-details';
import { StudentDetails } from './student-details/student-details';
import { StudentSection } from './student-section/student-section';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    FormsModule, 
    Homepage, 
    Header, 
    Signup,
    Navbar,
    TeacherSection,
    StudentInformation,
    TeacherInformation,
    StudentSection, 
    AddTeacher,
    AddStudent,
    UpdateTeacher,
    UpdateStudent, 
    TeacherDetails,
    StudentDetails, 
    CommonModule,

    
    
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  isLoggedIn = false;

  constructor(private user: Users) {}

   ngOnInit() {

    this.user.reloadUser();
    // RxJS BehaviorSubject<boolean>
    this.user.isUserLoggedIn.subscribe((status) => {
      console.log(status);
      this.isLoggedIn = status; //  this will update after logout too
      
    });
    // this.user.reloadUser(); 
  }
}
