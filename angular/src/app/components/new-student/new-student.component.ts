import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Router } from '@angular/router';
import { Student } from 'src/app/class/student';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.scss']
})
export class NewStudentComponent implements OnInit {
  tz:string
  firstName:string  
  lastName: string;
  city:string
  email:string 
  password : string ;
  phone:string ;  
  numhouse :number;
  street :string;
  grade:number;
  level:string;
  constructor(private  StudentService : StudentService,private  router:Router) { }
count=34;
students:Student[]=[];
  ngOnInit() {
  }
  addStudent()
  {
    console.log(this.city);
    this.count=this.count+1;
    this.StudentService
    .addStudent(new Student(this.tz,this.firstName,this.lastName,this.city,this.street,this.numhouse,
      this.email,this.password,this.phone,this.grade,this.level));
      this.router.navigate(['/student']);
  }
  GetTeacher(){
    this.StudentService.getStudent().subscribe((studentslist:Student[])=>{this.students=studentslist, console.log(this.students)});
    
  }
}
