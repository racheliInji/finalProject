import { Injectable, Input } from '@angular/core';
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
  


  flag = false;
  teacher: any;
  nameFile: string;
  hoursForteacherList: any[] = []
  Url = 'http://localhost:59802'
  @Input() wrapper: any

  constructor(private http: HttpClient, private auth: AuthService) { }

  addTeacher(teacher: Teacher) {
    
    teacher.Qualifications = this.nameFile;
    console.log(teacher);
    return this.http.post<any>(environment.URL + '/Teacher/addTeacher', teacher);
  }
  getRecrecommendation(id) {
    return this.http.get<any>(`${environment.URL + '/Teacher/getRecrecommendationById'}/${id}`);
  }
  getTeachers() {
    return this.http.get<Teacher[]>(environment.URL + '/Teacher/GetTeachers');
  }

  getTeacherById(id) {
    console.log("id");
    return this.http.get<any>(`${environment.URL + '/Teacher/getTeacherById'}/${id}`);
  }
  // getId(teacher) {
  //   return this.http.post<any>(environment.URL + '/Teacher/getId', teacher).subscribe(res=> console.log(res));
  // }
  DownloadCVFile(teacher: any) {
  
  console.log(teacher.userId);
    return this.http.get(`${environment.URL}/Teacher/GetCVFile/${teacher.userId}`, { responseType: "blob" });
  }

  updateTeacher(teacher: Teacher) {
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
    return this.http.post<any>(environment.URL + '/HoursForTeacher/getTeachersDaysAndHours', this.teacher).subscribe(res => {
      this.hoursForteacherList = res; console.log("getTeachersDays");
      console.log(this.hoursForteacherList);
      this.flag = true;
    }
    );
  }

  teacherDetails(teacher: any) {
    this.teacher = teacher;
    console.log(this.teacher)
  }
  IsChossen() {
    if (this.flag == true) {
      // console.log("flag " +this.flag)
      //  this.wrapper.nativeElement.setAttribute("style", "position:fixed");
      return true;
    }
    return false;
  }
}
