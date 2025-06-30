import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teacher } from '../modules/teacher.module';

@Injectable({ 
  providedIn: 'root' 

})
export class TeacherService {
  private apiUrl = 'http://localhost:3000/teacher';

  constructor(private http: HttpClient) {}

  // http get with synch
  getTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.apiUrl);
  }

  getTeacherById(id: number): Observable<Teacher> {
    return this.http.get<Teacher>(`${this.apiUrl}/${id}`);
  }

  addTeacher(data: Teacher): Observable<Teacher> {
    return this.http.post<Teacher>(this.apiUrl, data);
  }

  updateTeacher(id: number, data: Teacher): Observable<Teacher> {
    return this.http.put<Teacher>(`${this.apiUrl}/${id}`, data);
  }

  deleteTeacher(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }


}