import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClassSession } from '../interface/Class/class-session';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ChessClassService {
  private apiUrl = environment.apiUrl + 'Class';

  constructor(private http: HttpClient) {}

  getAll(): Observable<ClassSession[]> {
    return this.http.get<ClassSession[]>(`${this.apiUrl}`);
  }

  getById(id: string): Observable<ClassSession> {
    return this.http.get<ClassSession>(`${this.apiUrl}/${id}`);
  }

  create(data: Partial<ClassSession>): Observable<any> {
    return this.http.post(`${this.apiUrl}`, data);
  }

  update(id: string, data: Partial<ClassSession>): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}