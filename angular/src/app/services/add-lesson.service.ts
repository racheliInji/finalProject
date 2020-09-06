import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { addLesson } from '../class/addLesson';

@Injectable({
  providedIn: 'root'
})
export class AddLessonService {
  userId: number
  teacherId: number;
  subject:string;
  studentId:any;
  constructor(private UserService: UserService, private http: HttpClient) { }
  addLesson(formatedDate: any, starTtime: any) {
    console.log(formatedDate);
    console.log(this.teacherId + '  id');
    this.studentId=this.UserService.getIdByToken();
    console.log(new addLesson(this.teacherId, this.studentId ,this.subject,formatedDate, starTtime));
    return this.http.post<any>(environment.URL + '/Schedule/addLesson', new addLesson(this.teacherId, this.studentId ,this.subject,formatedDate, starTtime));
  }


}
