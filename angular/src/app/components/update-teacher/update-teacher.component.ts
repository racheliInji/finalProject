import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/services/teacher.service';
import { BaseUser } from 'src/app/class/base-user';
import { Teacher } from 'src/app/class/teacher';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { EmailValidation, PasswordValidation, RepeatPasswordValidator } from '../validators';
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
  id: number;
  form: any;
  firstFormGroup: any;
  constructor(private _formBuilder: FormBuilder, private TeacherService: TeacherService, private UserService: UserService) {
    this.form = this._formBuilder.group({
      email: new FormControl('', EmailValidation),
      password: new FormControl('', PasswordValidation),
      passwordAgain: new FormControl(''),
      acceptTerms: new FormControl('', [Validators.requiredTrue])
    }, { validator: RepeatPasswordValidator });
  }

  ngOnInit() {
    this.load();
    this.firstFormGroup = this._formBuilder.group({
      level: ['',],
      grade: ['',],
      firstName: ['',],
      lastName: ['',],
      street: ['',],
      numhouse: ['',],
      city: ['',],
      tz: ['',],
      phone: ['',],
      email: ['',],
      password: ['',],
      passwordAgain: new FormControl(''),
    }, { validator: RepeatPasswordValidator }

    );
  }

  load() {
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
  check() {
    if (this.firstFormGroup.value.tz != "") {
      this.firstName == this.firstFormGroup.value.tz
    }
    if (this.firstFormGroup.value.lastName != "") {
      this.lastName = this.firstFormGroup.value.lastName
    }
    if (this.firstFormGroup.value.city != "") {
      this.city = this.firstFormGroup.value.city;
    }
    if (this.firstFormGroup.value.street != "") {
      this.street = this.firstFormGroup.value.street;
    }
    if (this.firstFormGroup.value.numhouse != "") {
      this.numhouse = this.firstFormGroup.value.numhouse;
    }
    if (this.firstFormGroup.value.email != "") {
      this.email = this.firstFormGroup.value.email;
    }
    if (this.firstFormGroup.value.password != "") {
      this.password = this.firstFormGroup.value.password
    }
    if (this.firstFormGroup.value.phone != "") {
      this.phone = this.firstFormGroup.value.phone
    }
  }

  updateTeacher() {
    debugger;
    this.check();
    console.log("hi");
    this.TeacherService.updateTeacher(new Teacher(this.tz, this.firstName, this.lastName, this.city, this.street, this.numhouse,
      this.email, this.password, this.phone, '')).subscribe(i => { this.load() });
  }
}
