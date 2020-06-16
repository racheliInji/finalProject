import { Injectable } from '@angular/core';
import{Route,CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot, Router}from '@angular/router'
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
  })
  export class AuthGuard implements CanActivate
  {
      constructor(private  router:Router,private auth:AuthService)
      {

      }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
     {
        //  let currentuser = true;
        //  if(currentuser)
        //  return true;
        //  this.router.navigate(['/user']);
        //  return false;
        if(this.auth.currnetUser)
        {
          // this.router.navigate(['/student']);
          return true;
        }
        return false;
        
     }

  }