import { Component } from '@angular/core';
import { Student } from '../modules/student.module';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../services/student';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-student',
  imports: [FormsModule],
  templateUrl: './add-student.html',
  styleUrl: './add-student.css'
})
export class AddStudent {
  student: Student = {
    name:'',
    email:'',
    tid: 1
  };

  constructor(
    private studentService: StudentService,
    private router: Router,
    private http: HttpClient
  ) {}

  submitStudent(): void {
    this.http
      .post('http://localhost:3000/student', {
        name: this.student.name,
        email: this.student.email,
        subject: this.student.tid,
      })
      .subscribe(() => {
        alert('Student added successfully!');
        this.router.navigate(['/student-information']); // Redirect after submission
      });
  }


}
