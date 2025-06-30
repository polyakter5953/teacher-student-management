import { Component } from '@angular/core';
import { Teacher } from '../modules/teacher.module';
import { TeacherService } from '../services/teacher';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-add-teacher',
  imports: [FormsModule],
  templateUrl: './add-teacher.html',
  styleUrl: './add-teacher.css',
})
export class AddTeacher {
  teacher:  Teacher = {
    name: '',
    email: '',
    subject: '',
  };

  constructor(
    private teacherService: TeacherService,
    private router: Router,
    private http: HttpClient
  ) {}

  submitTeacher(): void {
    this.http
      .post('http://localhost:3000/teacher', {
        name: this.teacher.name,
        email: this.teacher.email,
        subject: this.teacher.subject,
      })
      .subscribe(() => {
        alert('Teacher added successfully!');
        this.router.navigate(['/teacher-information']); // Redirect after submission
      });
  }
}
