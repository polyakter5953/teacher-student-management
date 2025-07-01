import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-details',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './student-details.html',
  styleUrl: './student-details.css',
})
export class StudentDetails {
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
        console.log(this.student);
      });
  }
}
