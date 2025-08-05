import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Student } from '../interface/Student/student';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class StudentService {
  private apiUrl = environment.apiUrl + 'Student';

  constructor(private http: HttpClient) {}

  // GET: api/student
  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.apiUrl}`);
  }

  // GET: api/student/{id}
  getById(id: string): Observable<Student> {
    return this.http.get<Student>(`${this.apiUrl}/${id}`);
  }

  // POST: api/student
  create(data: Partial<Student>): Observable<any> {
    return this.http.post(`${this.apiUrl}`, data);
  }

  // PUT: api/student/{id}
  update(id: string, data: Partial<Student>): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  // DELETE: api/student/{id}
  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}