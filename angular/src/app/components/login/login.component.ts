import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { User } from 'src/app/class/user';
import { BaseUser } from 'src/app/class/base-user';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  name: string;
  password: string;
  // r: any;
  hide = true;
  isfound = true;
  key = "token";
  constructor(private userService: UserService, private auth: AuthService, private router: Router) { }

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
          this.router.navigate(['/calander']);
        }
        else { this.router.navigate(['/student']); }
      }
      else {
        this.isfound = false;
      }
      this.userService.getIdByToken();
    },
      (error: any) => {
        this.isfound = false;
      });

  }

}
