import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/services/teacher.service';
import { User } from 'src/app/class/user';
import { Router } from '@angular/router';
import { Teacher } from 'src/app/class/teacher';
import { BaseUser } from 'src/app/class/base-user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormBuilder, FormControl,Validators } from '@angular/forms';
import { RepeatPasswordValidator, RepeatPasswordEStateMatcher, EmailValidation, PasswordValidation } from '../validators';

@Component({
  selector: 'app-new-teacher',
  templateUrl: './new-teacher.component.html',
  styleUrls: ['./new-teacher.component.scss']
})
export class NewTeacherComponent implements OnInit {
  tz: string
  firstName: string
  lastName: string;
  city: string
  email: string
  password: string;
  phone: string;
  numhouse: number;
  street: string;
  checkpassword: string;
  private key = 'token'
  private user: any;
  private kind: string;
  teachers: Teacher[] = [];
  form: any;
  passwordsMatcher = new RepeatPasswordEStateMatcher;
  constructor(private formBuilder: FormBuilder,private TeacherService: TeacherService, private userService: UserService, private router: Router, private auth: AuthService) {
    this.form = this.formBuilder.group({
      email: new FormControl('', EmailValidation),
      password: new FormControl('', PasswordValidation),
      passwordAgain: new FormControl(''),
      acceptTerms: new FormControl('', [Validators.requiredTrue])
    }, { validator: RepeatPasswordValidator });
   }


  ngOnInit() {
  }
  flag = false
  check() {
    return this.flag;
  }
  checkPassword() {
    if (this.checkpassword != this.password) {
      alert("הסיסמת איתות לא זהה לסיסמא");
      this.flag = false
      return false;
    }
    else {
      this.flag = true;
    }
    return true;
  }
  addTeacher() {
    if (this.checkPassword() == true) {
      console.log(this.city);

      this.TeacherService
        .addTeacher(new Teacher(this.tz, this.firstName, this.lastName, this.city, this.street, this.numhouse,
          this.email, this.password, this.phone, " ")).subscribe(res => {
            this.auth.login(this.firstName, this.password).subscribe((token: string) => {
              if (token != "notfound") {
                localStorage.setItem(this.key, token);
              }
            }
            );
            this.userService.sendEmails(this.firstName, this.lastName, this.email).subscribe();
          });

      this.router.navigate(['/determineLessons']);
    }

  }
  GetTeacher() {
    this.TeacherService.getTeachers().subscribe((teacherList: Teacher[]) => { this.teachers = teacherList, console.log(this.teachers) });

  }
}
