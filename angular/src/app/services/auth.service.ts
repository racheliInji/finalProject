import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseUser } from '../class/base-user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private key = 'token'
  private user: any;
  private kind: string;
  private tokenKey = 'token';
  message = { error: '' };
  Url = 'http://localhost:59802/User';

  constructor(private http: HttpClient, private router: Router) { }
  login(name: string, password: string) {
    return this
      .http
      .get(`${environment.URL}/User/login`, { params: { name, password } });
  }

  logout() {
    localStorage.removeItem(this.key);
    this.router.navigate(['/login']);
  }

  token() {
    return localStorage.getItem(this.key);
  }
  
  currnetUser() {
    return localStorage.getItem(this.key);
  }

}


