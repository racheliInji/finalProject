import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../class/student';
import { BaseUser } from '../class/base-user';

@Injectable({
  providedIn: 'root'
})
export class StudentService {



  Url = 'http://localhost:59802/Student'


  constructor(private http: HttpClient) { }

  addStudent(student: Student) {
    console.log(student);
    this.http.post<any>(this.Url + '/AddStudent', student).subscribe();
  }
  getStudent() {
    return this.http.get<Student[]>(this.Url + '/GetStudent');
  }
  getIdStudent(user: BaseUser) {
    return this.http.put<any>(this.Url + "/getIdStudent", user);
  }
  updateStudent(student: Student) {
    return this.http.put<any>(this.Url + "/updateStudent", student);
  }
}
