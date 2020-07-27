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
  token: string;
  id: any;
  constructor(private http: HttpClient) { }

  Url = 'http://localhost:59802/User';

  Login(user: BaseUser): Observable<any> {

    // islogin:Boolean;

    return this.http.put<User>(this.Url + "/Login", user);
  }
  getUser() {
    return this.http.get<User[]>(this.Url + '/alluser');
  }
  adduser(user: User) {
    console.log(user);
    this.http.post<User>(this.Url + '/AddUser', user).subscribe(i => this.getUser());
  }
  getIdByToken() {
    this.token = localStorage.getItem("token");
    for (var i = 1; i < this.token.length; i++) {
      if (this.token[i] == 'a') {
        this.id = this.token.slice(1, i);
      }
    }
    console.log(this.id/2);
   return this.id/2;

  }
}
