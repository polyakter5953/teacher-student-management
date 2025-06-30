import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-student-section',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './student-section.html',
  styleUrl: './student-section.css'
})
export class StudentSection {

}
