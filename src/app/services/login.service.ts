import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUser } from '../models/loginUser.interface';
import { loginResponseBody } from '../models/loginResponseBody';
import { LocalStorageService } from './LocalStorage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http: HttpClient , private localStorage:LocalStorageService) { }

  loginApi(user:LoginUser) {
  return this.http.post<loginResponseBody>('https://dummyjson.com/auth/login', user, {
    observe: 'response'
  });
  }


}
