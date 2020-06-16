import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/class/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user:User[] = []

  constructor(public userService: UserService) { }

  ngOnInit() {
   this.getUser();
 
  }
getUser()
{ 
this.userService.getUser().subscribe((userList:User[])=>{this.user=userList});
console.log(this.user);
}
}
