import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root'
})
export class CalanderService {
  lessonList:any[]=[];
  constructor(private http: HttpClient,private userService:UserService) { }
  userId=this.userService.getIdByToken();
  getLesson() {
    console.log(this.userId+"userId");
    return this.http.get<any[]>(`${environment.URL + '/Schedule/GetLessonsByteacherId'}/${this.userId}`).subscribe(res=>{this.lessonList=res;console.log(this.lessonList)})
  }
}
