import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../class/user';
import { BaseUser } from '../class/base-user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  // Login(name: string, password: string) {
  //   throw new Error("Method not implemented.");
  // }

  constructor(private http: HttpClient) { }

  Url = 'http://localhost:59802/User';

  Login(user:BaseUser): Observable<any> {
    
    // islogin:Boolean;
    
    return this.http.put<User>(this.Url + "/Login", user);    
  }
 getUser () {
    return this.http.get<User[]>(this.Url+'/alluser');
  }
  adduser(user: User) {
    console.log(user);
   this.http.post<User>(this.Url+'/AddUser',user).subscribe(i=>this.getUser());
  }
}
