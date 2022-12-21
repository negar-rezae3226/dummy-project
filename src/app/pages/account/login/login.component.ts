import { Component } from '@angular/core';
import { LoginUser } from './loginUser.interface';
import { LoginService } from 'src/app/services/login.service';
import { LocalStorageService } from 'src/app/services/LocalStorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  loginUserApi: LoginUser[] = [];

  constructor(private loginService: LoginService, private localStorageToken: LocalStorageService) { }



  onLoginUser(userName: string, password: string, e: Event) {

    e.preventDefault();

    this.loginService.loginApi(userName, password)
      .then((res) =>
        res.json().then((data) => ({ status: res.status, body: data }))
      )
      .then((res: loginResponse) => {
        if (res.status == 200) {

          this.localStorageToken.saveData('token', res.body?.token)
        }
      });


  }

}


export interface loginResponse {
  body?: any;
  status?: any;
}

export interface loginResponseBody {
  email?: string;
  firstName?: string;
  gender?: string;
  id?: number;
  image?: string;
  lastName?: string;
  token?: string;
  username?: string;
}

