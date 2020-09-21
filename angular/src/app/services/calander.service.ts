import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UserService } from './user.service';
import { addLesson } from '../class/addLesson';
@Injectable({
  providedIn: 'root'
})

export class CalanderService {
  addRecommendation(value: string, id: string) {
    console.log(id);
    return this.http.get(environment.URL+ '/Student/AddRecommendation', { params:{value,id } });
  }

  lessonList: any[] = [];
  lessonListForStudent: any[] = [];
  constructor(private http: HttpClient, private userService: UserService) { }
  userId = this.userService.getIdByToken();

  getLesson() {
   
    console.log(this.userService.getIdByToken())
    return this.http.get<any[]>(`${environment.URL + '/Schedule/GetLessonsByteacherId'}/${this.userService.getIdByToken()}`).subscribe(res => { this.lessonList = res; console.log(this.lessonList) })
  }

  getLessonForStudent() {
    console.log(this.userId + "userId");
    return this.http.get<any[]>(`${environment.URL + '/Student/GetLessonsByStudentId'}/${this.userService.getIdByToken()}`).subscribe(res => { this.lessonListForStudent = res; console.log(this.lessonListForStudent) })
  }

  deleteLesson(ScheduleId: number) {
    // console.log(this.userId+"userId");
    // debugger;
    var id=ScheduleId;
    return this.http.delete<any>(`${environment.URL + '/Schedule/DeleteLesson'}/${id}`);
  }

}