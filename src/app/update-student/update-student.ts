import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-update-student',
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './update-student.html',
  styleUrl: './update-student.css',
})
export class UpdateStudent {
  studentId!: string;
  student: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.studentId = String(this.route.snapshot.paramMap.get('id'));
    this.loadStudent();
  }

  loadStudent() {
    this.http
      .get(
        `https://student-teacher-management-server-rcv8.onrender.com/student/${this.studentId}`
      )
      .subscribe((data) => {
        this.student = data;
      });
  }

  updateStudent() {
    this.http
      .put(
        `https://student-teacher-management-server-rcv8.onrender.com/student/${this.studentId}`,
        this.student
      )
      .subscribe(() => {
        alert('Student updated successfully!');
        this.router.navigate(['/student-information']);
      });
  }
}
