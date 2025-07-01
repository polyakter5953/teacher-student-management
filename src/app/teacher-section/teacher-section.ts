import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-teacher-section',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './teacher-section.html',
  styleUrl: './teacher-section.css',
})
export class TeacherSection {}
