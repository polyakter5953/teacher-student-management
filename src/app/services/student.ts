import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../modules/student.module';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private apiUrl =
    'https://student-teacher-management-server-rcv8.onrender.com/student';
  constructor(private http: HttpClient) {}

  getStudent(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }

  getStudentById(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.apiUrl}/${id}`);
  }

  addStudent(data: Student): Observable<Student> {
    return this.http.post<Student>(this.apiUrl, data);
  }

  updateStudent(id: number, data: Student): Observable<Student> {
    return this.http.put<Student>(`${this.apiUrl}/${id}`, data);
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

