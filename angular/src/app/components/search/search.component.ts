import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  city: string;
  street: string;
  subject: string;
  teacherList: any[] = []
  src = "C:\Users\USER\Desktop\myproject\project\WebApi\ResourcesFiles"
  constructor(private TeacherService: TeacherService) { }

  ngOnInit() {
  }
  getTeachers() {
    this.TeacherService.getTeacherAndSubject().subscribe(res => { this.teacherList = res, console.log(this.teacherList) });
  }
  check(teacher: any) {
    console.log(teacher.Qualifications);
    if (teacher.Qualifications != null && teacher.Qualifications !="") {
      console.log("true");
      return true;
    }

    console.log("false")
    return false;
  }
}
