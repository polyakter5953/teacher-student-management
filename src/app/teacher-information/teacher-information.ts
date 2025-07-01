import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { OnInit } from '@angular/core';
import { Teacher } from '../modules/teacher.module';
import { TeacherService } from '../services/teacher';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UpdateTeacher } from '../update-teacher/update-teacher';
import { TeacherDetails } from '../teacher-details/teacher-details';

@Component({
  selector: 'app-teacher-information',
  imports: [RouterLink, CommonModule, UpdateTeacher, TeacherDetails],
  templateUrl: './teacher-information.html',
  styleUrls: ['./teacher-information.css'],
})
export class TeacherInformation {
  teachers: Teacher[] = [];
  page = 0;
  pageSize = 5;

  constructor(private service: TeacherService, private router: Router) {}

  ngOnInit() {
    this.loadTeachers();
  }

  loadTeachers() {
    this.service.getTeachers().subscribe((data) => {
      const start = this.page * this.pageSize;
      this.teachers = data.slice(start, start + this.pageSize);
    });
  }

  nextPage() {
    this.page++;
    this.loadTeachers();
  }

  prevPage() {
    if (this.page > 0) this.page--;
    this.loadTeachers();
  }

  deleteTeacher(id: number) {
    this.service.deleteTeacher(id).subscribe(() => {
      this.loadTeachers();
    });
  }
}
