import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TeacherService } from 'src/app/services/teacher.service';
import { Router } from '@angular/router';
import { AddLessonService } from 'src/app/services/add-lesson.service';
import { SubjectToTeacher } from 'src/app/class/subject-to-teacher';
import { Address } from 'cluster';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  city: string;
  street: string;
  subject: string;
  teacherList: SubjectToTeacher[] = [];
  teacher: any;
  flag = false;
  searchText: string = '';
  searchPhone: string = '';
  searchFirstName: string = '';
  searchLastName: string = '';
  searchPrice: string = '';
  searchPlace:string='';
  searchPriceHigh: string='';
  userFilter: any = { name: '' };
  src = "C:\Users\USER\Desktop\myproject\project\WebApi\ResourcesFiles"
  constructor(private router: Router,private TeacherService: TeacherService, private AddLessonService: AddLessonService) { }

  ngOnInit() {
    this.getTeachers();
  }
  DownloadCVFile(teacher){
    this.TeacherService.DownloadCVFile(teacher).subscribe(res=>{
      var url = window.URL.createObjectURL(res);
      window.open(url);
      // console.log("download result ", res);
    });
  }
  getTeachers() {
    this.TeacherService.getTeacherAndSubject().subscribe(res => { this.teacherList = res, console.log(this.teacherList) });
  }
  getRecrecommendation(teacher){
this.router.navigate(['/recommandation',teacher.userId])
  }
  check(teacher: any) {
    // console.log(teacher);
    if (teacher != null && teacher!= "") {
      return true;
    }
    return false;
  }
  // city: string;
  isOpen = false;
  // street: string;
  // subject: string;
  // flag = false;
  // teacher: any;
  // teacherList: any[] = []
  // searchText:string='';
  // searchPhone:string='';
  // searchFirstName:string='';
  // searchLastName:string='';
  // searchPrice:string='';
  // userFilter: any = { name: '' };
  // // src = "C:\Users\USER\Desktop\myproject\project\WebApi\ResourcesFiles"
  // constructor(private router: Router, private TeacherService: TeacherService, private AddLessonService: AddLessonService) { }
  // @ViewChild('wrapper', { static: true }) wrapper: ElementRef;
  // ngOnInit() {
  //   this.getTeachers();
  // }
  // getTeachers() {
  //   this.TeacherService.getTeacherAndSubject().subscribe(res => { this.teacherList = res,console.log("hi"), console.log(this.teacherList) });
  // }
  // check(teacher: any) {
  //   console.log("image" + teacher);
  //   if (teacher != null && teacher != "") {
  //     return true;
  //   }
  //   return false;
  // }
  addLesson(teacher) {

    this.teacher = teacher
    // console.log(teacher);
    this.AddLessonService.teacherId = this.teacher.userId;
    this.AddLessonService.subject = this.teacher.SubjectName;
    this.TeacherService.teacherDetails(teacher);
    this.TeacherService.getTeachersDays();
    // this.TeacherService.flag = true;
    // this.router.navigate['addlesson']
  }
  IsChossen() {
    if (this.flag == true) {
      return true;
    }
    return false;
  }
  open() {
    this.isOpen = true;
  }
  close() {
    this.isOpen = false;
  }
  checkIsOpen() {
    if (this.isOpen == true)
      return true;
    return false;
  }
  handleAddressChange(address: Address)
{
  console.log(address);
  console.log(this.searchPlace)
  
}


}
