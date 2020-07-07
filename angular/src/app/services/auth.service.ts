import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseUser } from '../class/base-user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   private key='currnetUser'
   private user :any;
   private kind:string;
   Url = 'http://localhost:59802/User';
  constructor(private http:HttpClient,private  router:Router) { }
  login( user:BaseUser)
  {
    // let user={
    //    'name':name,
    //    'password':password
    //      }
        
    this.user=user;
    this.http.put<any>(this.Url + "/Login", user).subscribe(i=>{this.check(i), console.log(i), this.kind = i});
    if(this.kind!= null)
    return true;
    return false;
  }
      check(i: any) {
        console.log(i);
        if(i!=null)
        {
          localStorage.setItem(this.key, JSON.stringify(this.user));
          if(i=="teacher")
          this.router.navigate(['/teacher']);
          else
          this.router.navigate(['/student']);
        }
        // else
        // this.router.navigate(['/newuser']);
      }
        // .subscribe((i)=>{ localStorage.setItem(this.key, JSON.stringify(user))},(i2)=>{this.router.navigate(['/newuser'])});
     currnetUser()
     {
       return localStorage.getItem(this.key);
     }

  }


