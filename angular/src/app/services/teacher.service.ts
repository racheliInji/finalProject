import { Injectable } from '@angular/core';
import { User } from '../class/user';
import { HttpClient } from '@angular/common/http';
import { Teacher } from '../class/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  Url = 'http://localhost:59802/Teacher'
  

  constructor(private http: HttpClient) { }
  adduser( teacher: Teacher) {
    console.log(teacher);
   this.http.post<any>(this.Url+'/addTeacher' , teacher).subscribe();
  }
  getTeachers() {
   return this.http.get<Teacher[]>(this.Url+'/GetTeachers');
  }
}
