import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { User } from 'src/app/class/user';
import { BaseUser } from 'src/app/class/base-user';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { CalanderService } from 'src/app/services/calander.service';
import { HoursAndDayService } from 'src/app/services/hours-and-day.service';

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
  constructor(private calanderService: CalanderService, private hoursAndDayService: HoursAndDayService ,private userService: UserService, private auth: AuthService, private router: Router) { }

  ngOnInit() {

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
          this.calanderService.getLesson();
          this.hoursAndDayService.getHourandDayById(this.userService.getIdByToken());
        }
        else { this.router.navigate(['/student']); }
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
