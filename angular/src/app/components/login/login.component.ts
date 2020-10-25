import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { User } from 'src/app/class/user';
import { BaseUser } from 'src/app/class/base-user';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { CalanderService } from 'src/app/services/calander.service';
import { HoursAndDayService } from 'src/app/services/hours-and-day.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { RepeatPasswordValidator, RepeatPasswordEStateMatcher, EmailValidation, PasswordValidation } from '../validators';
// import { EmailValidation, PasswordValidation, RepeatPasswordEStateMatcher, RepeatPasswordValidator } from '';
// import swal from 'sweetalert';
import swal from 'sweetalert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  name: string;
  password: string;
  hide = true;
  isfound = true;
  key = "token";
  massage = "המשתמש לא נמצא"

  constructor(private formBuilder: FormBuilder, private calanderService: CalanderService, private hoursAndDayService: HoursAndDayService, private userService: UserService, private auth: AuthService, private router: Router) {

  }

  ngOnInit() {
  }
  form: any;
  passwordsMatcher = new RepeatPasswordEStateMatcher;
  // checkPasswords(group: FormGroup) { // here we have the 'passwords' group
  //   let pass = group.get('password').value;
  //   let confirmPass = group.get('confirmPass').value;

  //   return pass === confirmPass ? null : { notSame: true }
  // }
  forgot() {
    console.log(this.name);
    swal({
      text: "לשיחזור הסיסמא הקש דואר אלקטרוני",
      content: {
        element: "input",
        attributes: {
          id: "email",
          // title: "הקש מיל",
          style: "border: none; border-bottom: 2px solid darkmagenta; width: 78%; margin-left: 10%;",
        },
      },
      buttons: ["ביטול", "אישור"],
    }).then(
      value => {
        if (value != null && value != "") {
          console.log(value);
          this.userService.forgetPassword(value).subscribe();

          swal({
            icon: "info",
            title: "הסיסמא נשלחה למיל " + value
          })
        }
        else if(value==""){
          swal({
            title:"לא הוקש דואר אלקטרוני",
            text: "לשיחזור הסיסמא הקש דואר אלקטרוני",
            content: {
              element: "input",
              attributes: {
                id: "email",
                // title: "הקש מיל",
                style: "border: none; border-bottom: 2px solid darkmagenta; width: 78%; margin-left: 10%;",
              },
            },
            buttons: ["ביטול", "אישור"],
          })
        }
      }
    );
  }
  checkNewUser() {
    if (this.isfound == false)
      return true;
    return false;
  }

  login() {
    this.auth.login(this.name, this.password).subscribe((token: string) => {
      if (token != "notfound") {
        localStorage.setItem(this.key, token);
        if (token.startsWith('0')) {
          this.hoursAndDayService.getHourandDayById(this.userService.getIdByToken());
          this.calanderService.getLesson();
          this.router.navigate(['/teacherHome']);

        }
        else {
          this.calanderService.getLessonForStudent();
          this.router.navigate(['/בית']);

        }
        this.userService.getIdByToken();
      }
      else {
        this.isfound = false;
      }
      // this.userService.getIdByToken();
    },
      (error: any) => {
        this.massage = error.massage;
        this.isfound = false;

      });

  }

}
