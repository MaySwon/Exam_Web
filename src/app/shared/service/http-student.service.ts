import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Student } from '../components/ui/student';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpStudentService {

  constructor(private http: HttpClient) { }

  getStudents():Promise<Student[]> {
    return this.http.get<Student[]>(`${environment.apiUrl}/students`).toPromise();
  }

  getStudent(id:number):Promise<Student> {
    return this.http.get<Student>(`${environment.apiUrl}/students/${id}`).toPromise();
  }

  postStudent(student:Student,):Promise<Student> {
    return this.http.post<Student>(`${environment.apiUrl}/students/`, student).toPromise();
  }

  putStudent(student:Student,id:number):Promise<Student> {
    return this.http.put<Student>(`${environment.apiUrl}/students/${id}`, student).toPromise();
  }

  deleteStudent(id:number):Promise<Student> {
    return this.http.delete<Student>(`${environment.apiUrl}/students/${id}`).toPromise();
  }
}
