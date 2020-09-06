import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/services/teacher.service';
import { BaseUser } from 'src/app/class/base-user';
import { Teacher } from 'src/app/class/teacher';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.scss']
})
export class UpdateTeacherComponent implements OnInit {
  tz: string
  firstName: string
  lastName: string;
  city: string
  email: string
  password: string;
  phone: string;
  numhouse: number;
  street: string;
  user: BaseUser;
  teacher: Teacher;
  id: number
  constructor(private TeacherService: TeacherService, private UserService: UserService) { }

  ngOnInit() {
    this.load();
  }

  load(){
    if (localStorage.getItem("token")) {
      this.id = this.UserService.getIdByToken();
      console.log(this.id);
      this.TeacherService.getTeacherById(this.id).subscribe(res => { this.teacher = res, console.log(this.teacher), this.putValue() })

    }
  }

  putValue() {
    this.firstName = this.teacher.firstName;
    this.lastName = this.teacher.lastName;
    this.city = this.teacher.city;
    this.street = this.teacher.street;
    this.numhouse = this.teacher.numhouse;
    this.email = this.teacher.email;
    this.phone = this.teacher.phone;
    this.password = this.teacher.password;
    this.tz = this.teacher.tz;

  }

  updateTeacher() {
    this.TeacherService.updateTeacher(new Teacher(this.tz, this.firstName, this.lastName, this.city, this.street, this.numhouse,
      this.email, this.password, this.phone, '')).subscribe(i=>{this.load()});
  }
}
