import { Injectable } from '@angular/core';
import { User } from '../class/user';
import { HttpClient } from '@angular/common/http';
import { Teacher } from '../class/teacher';
import { BaseUser } from '../class/base-user';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  teacher: any;
  nameFile: string;



  Url = 'http://localhost:59802/Teacher'


  constructor(private http: HttpClient, private auth: AuthService) { }

  addTeacher(teacher: Teacher) {
    teacher.Qualifications = this.nameFile;
    console.log(teacher);
    return this.http.post<any>(environment.URL + '/Teacher/addTeacher', teacher);
  }

  getTeachers() {
    return this.http.get<Teacher[]>(environment.URL + '/Teacher/GetTeachers');
  }

  // getTeacher(user: BaseUser) {
  //   return this.http.put<any>(environment.URL + "/Teacher/getTeacher", user);
  // }
  getTeacherById(id) {
    console.log("id");
    return this.http.get<any>(`${this.Url +'/getTeacherById'}/${id}`);
  }

  updateStudent(teacher: Teacher) {
    return this.http.put<any>(environment.URL + "/Teacher/updateTeacher", teacher);
  }

  getTeacherAndSubject() {
    return this.http.get<any[]>(environment.URL + '/Teacher/GetTeacherAndSubject');
  }

  addfile(fd: FormData, name: string) {
    this.nameFile = name;
    return this.http.post(environment.URL + '/Teacher/addfile', fd);
  }

  getTeachersDays() {
    return this.http.post<any>(environment.URL + '/HoursForTeacher/getTeachersDaysAndHours', this.teacher);
  }

  teacherDetails(teacher: any) {
    this.teacher = teacher;
  }
}
