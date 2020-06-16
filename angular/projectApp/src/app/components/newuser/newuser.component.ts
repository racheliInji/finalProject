import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/class/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.scss']
})


export class NewuserComponent implements OnInit {
   tz:string
   firstName:string  
   lastName: string;
   city:string
   email:string 
   password : string ;
   phone:string ;  
   numhouse :number;
   street :string
  constructor(private userService: UserService,private  router:Router) { }

  ngOnInit() {
  }
  adduser()
{
  this.userService.adduser(new User(this.tz,this.firstName,this.lastName,this.city,this.street,this.numhouse,
    this.email,this.password,this.phone));
    this.router.navigate(['/student']);
}
}
