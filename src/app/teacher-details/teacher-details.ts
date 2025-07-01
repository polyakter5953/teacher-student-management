import { Component } from '@angular/core';
import { Teacher } from '../modules/teacher.module';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from '../services/teacher';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teacher-details',
  imports: [FormsModule, CommonModule],
  templateUrl: './teacher-details.html',

  styleUrl: './teacher-details.css',
})
export class TeacherDetails {
  teacherId!: string;
  teacher: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.teacherId = String(this.route.snapshot.paramMap.get('id'));
    this.loadTeacher();
  }

  loadTeacher() {
    this.http
      .get(
        `https://student-teacher-management-server-rcv8.onrender.com/teacher/${this.teacherId}`
      )
      .subscribe((data) => {
        this.teacher = data;
        console.log(this.teacher);
      });
  }
}
