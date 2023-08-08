import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginObj, UserObj } from '../models/authObj.model';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenApiModel } from '../models/token-api.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly APIUrl = "https://localhost:7109/api/AuthManagement";

  private userPayload:any;
  constructor(private http: HttpClient, private router: Router) {
    this.userPayload = this.decodeToken();
   }

   register(userObj:UserObj) {
     return this.http.post<UserObj>(this.APIUrl +'/register', userObj);
   }
   
   login(loginObj:LoginObj) {
    return this.http.post<LoginObj>(this.APIUrl +'/login', loginObj);
   }
   
   renewToken(tokenApi:TokenApiModel){
    return this.http.post<any>(this.APIUrl+'/refresh', tokenApi);
   }

   logOut(){
    //localStorage.clear();
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    this.router.navigate(['login']);
   }

   storeToken(tokenValue: string) {
     localStorage.setItem('token', tokenValue)
   }

   storeRefreshToken(tokenValue: string) {
    localStorage.setItem('refreshToken', tokenValue)
  }

   getToken(){
    return localStorage.getItem('token');
   }

   getRefreshToken(){
    return localStorage.getItem('refreshToken');
   }

   isLoggedIn(): boolean{
    return !!localStorage.getItem('token');
   }

   decodeToken(){
    const jwtHelper= new JwtHelperService();
    const token = this.getToken()!;
    console.log(jwtHelper.decodeToken(token));
    return jwtHelper.decodeToken(token);
   }

   getUsernameFromToken(){
    if(this.userPayload)
    return this.userPayload.name;
   }

   getRoleFromToken(){
    if(this.userPayload)
    return this.userPayload.role;
   }
}
