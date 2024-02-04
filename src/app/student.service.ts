import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  readonly baseUrl = 'https://api.afrogeekacademy.com/api/v1/extern/students';

  constructor(private httpClient: HttpClient) { }

  getAllStudent(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.baseUrl}`);
  }
}
