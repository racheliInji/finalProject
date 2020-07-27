import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BaseUser } from 'src/app/class/base-user';
import { Student } from 'src/app/class/student';
import { StudentService } from 'src/app/services/student.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.scss']
})
export class UpdateStudentComponent implements OnInit {
  tz: string
  firstName: string
  lastName: string;
  city: string
  email: string
  password: string;
  phone: string;
  numhouse: number;
  street: string;
  grade: number;
  level: string;
  user: BaseUser;
  student: Student;
  id: number;
  @ViewChild('fname', { static: true }) fname: ElementRef;
  constructor(private StudentService: StudentService, private UserService: UserService) { }

  ngOnInit() {

    if (localStorage.getItem("token")) {
      this.id = this.UserService.getIdByToken();
    }
    this.StudentService.getStudentById(this.id).subscribe(res => { this.student = res, console.log(this.student), this.putValue() })

  }
  putValue() {

    this.firstName = this.student.firstName;
    this.lastName = this.student.lastName;
    this.city = this.student.city;
    this.street = this.student.street;
    this.numhouse = this.student.numhouse;
    this.email = this.student.email;
    this.phone = this.student.phone;
    this.password = this.student.password;
    this.level = this.student.Level;
    this.grade = this.student.IdGrade;
    this.tz = this.student.tz;

  }
  updateStudent() {
    this.StudentService.updateStudent(new Student(this.tz, this.firstName, this.lastName, this.city, this.street, this.numhouse,
      this.email, this.password, this.phone, this.grade, this.level)).subscribe();
  }

  deleteStudent(){
    this.StudentService.deleteStudent(9);
  }


}
