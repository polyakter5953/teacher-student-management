import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { Student } from '../modules/student.module';
import { StudentService } from '../services/student';

@Component({
  selector: 'app-student-information',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './student-information.html',
  styleUrl: './student-information.css',
})
export class StudentInformation {
  students: Student[] = [];
  page = 0;
  pageSize = 100;

  constructor(private service: StudentService, private router: Router) {}

  ngOnInit() {
    this.loadStudent();
  }

  loadStudent() {
    this.service.getStudent().subscribe((data) => {
      const start = this.page * this.pageSize;
      this.students = data.slice(start, start + this.pageSize);
    });
  }

  nextPage() {
    this.page++;
    this.loadStudent();
  }

  prevPage() {
    if (this.page > 0) this.page--;
    this.loadStudent();
  }

  deleteStudent(id: number) {
    this.service.deleteStudent(id).subscribe(() => {
      this.loadStudent();
    });
  }
}
