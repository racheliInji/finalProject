import { Injectable } from '@angular/core';
import { User } from '../class/user';
import { HttpClient } from '@angular/common/http';
import { Teacher } from '../class/teacher';
import { BaseUser } from '../class/base-user';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  nameFile: string;



  Url = 'http://localhost:59802/Teacher'


  constructor(private http: HttpClient) { }
  addTeacher(teacher: Teacher) {
    teacher.Qualifications=this.nameFile;
    console.log(teacher);
    this.http.post<any>(this.Url + '/addTeacher', teacher).subscribe();
  }
  getTeachers() {
    return this.http.get<Teacher[]>(this.Url + '/GetTeachers');
  }
  getTeacher(user: BaseUser) {
    return this.http.put<any>(this.Url + "/getTeacher", user);
  }
  updateStudent(teacher: Teacher) {
    return this.http.put<any>(this.Url + "/updateTeacher", teacher);
  }
  getTeacherAndSubject() {
    return this.http.get<any[]>(this.Url + '/GetTeacherAndSubject');
  }
  addfile(fd: FormData, name: string) {
    this.nameFile = name;
   return this.http.post(this.Url + '/addfile', fd);
  }



}
