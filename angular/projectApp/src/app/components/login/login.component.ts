import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { User } from 'src/app/class/user';
import { BaseUser } from 'src/app/class/base-user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  name: string;
  password: string;
  r:any;
  constructor(private userService: UserService, private auth:AuthService) { }

  ngOnInit() {

  }

  login() {
  // this.auth.login(this.name , this.password);
  this.auth.login(new BaseUser( this.name , this.password));
  //  this.userService.Login(new BaseUser( this.name , this.password)).subscribe(i=>{this.check(i)});
  }
  // check(i: any) {
  //   if(i==true)
  //   console.log(1)
  //   else
  //   console.log(2);
  // }

}
