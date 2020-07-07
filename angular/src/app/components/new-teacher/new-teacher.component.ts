import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/services/teacher.service';
import { User } from 'src/app/class/user';
import { Router } from '@angular/router';
import { Teacher } from 'src/app/class/teacher';

@Component({
  selector: 'app-new-teacher',
  templateUrl: './new-teacher.component.html',
  styleUrls: ['./new-teacher.component.scss']
})
export class NewTeacherComponent implements OnInit {
  tz:string
   firstName:string  
   lastName: string;
   city:string
   email:string 
   password : string ;
   phone:string ;  
   numhouse :number;
   street :string;
  
  constructor(private  TeacherService : TeacherService,private  router:Router) { }
count=20;
teachers:Teacher[]=[];
  ngOnInit() {
  }
  addTeacher()
  {
    console.log(this.city);
    this.count=this.count+1;
    this.TeacherService
    .adduser(new Teacher(this.tz,this.firstName,this.lastName,this.city,this.street,this.numhouse,
      this.email,this.password,this.phone," "));
      this.router.navigate(['/student']);
  }
  GetTeacher(){
    this.TeacherService.getTeachers().subscribe((teacherList:Teacher[])=>{this.teachers=teacherList, console.log(this.teachers)});
    
  }
}
