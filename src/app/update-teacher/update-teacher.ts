import { Component } from '@angular/core';
import { Teacher } from '../modules/teacher.module';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TeacherService } from '../services/teacher';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
 
@Component({
  selector: 'app-update-teacher',
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './update-teacher.html',
  styleUrl: './update-teacher.css'
})
export class UpdateTeacher {
 teacherId!: string;
  teacher: any;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.teacherId = String(this.route.snapshot.paramMap.get('id'));
    this.loadTeacher();
  }

  loadTeacher() {
    this.http.get(`https://student-teacher-management-server-rcv8.onrender.com/teacher/${this.teacherId}`)
      .subscribe(data => {
        this.teacher = data;
      });
  }

  updateTeacher() {
    this.http.put(`https://student-teacher-management-server-rcv8.onrender.com/teacher/${this.teacherId}`, this.teacher)
    // this.http.put(`http://localhost:3000/teacher/${this.teacherId}`, this.teacher)
      .subscribe(() => {
        alert('Teacher updated successfully!');
        this.router.navigate(['/teacher-information']);
      });
  }
}

// https://student-teacher-management-server-rcv8.onrender.com/teacher