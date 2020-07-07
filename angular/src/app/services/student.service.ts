import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../class/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

   Url = 'http://localhost:59802/Student'
  

  constructor(private http: HttpClient) { }
  addStudent( student:Student) {
    console.log(student);
   this.http.post<any>(this.Url+'/AddStudent' , student).subscribe();
  }
  getStudent() {
   return this.http.get<Student[]>(this.Url+'/GetStudent');
  }
}
