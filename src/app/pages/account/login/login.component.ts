import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { LocalStorageService } from 'src/app/services/LocalStorage.service';
import { LoginUser } from 'src/app/models/loginUser.interface';
import { loginResponse } from 'src/app/models/loginResponse';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  loginUserApi: LoginUser = {};
  form!: FormGroup;
  login: boolean = true;
  hide: boolean = true;


  constructor(private router:Router,private fb: FormBuilder, private loginService: LoginService, private localStorageToken: LocalStorageService) { }

  ngOnInit(): void {


    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]

    });

  }


  onSubmit(username: string, password: string, e: Event) {

    this.loginUserApi.username = username;
    this.loginUserApi.password = password;

    this.localStorageToken.saveData('username', this.loginUserApi.username);

    e.preventDefault();

    this.loginService.loginApi(this.loginUserApi).subscribe(
      (response) => {

        if (response.status == 200) {
          this.localStorageToken.saveData('token', (response.body?.token as string));
          this.router.navigate(['/']);
        }
      },
      (error) => {
        if (error.status === 400) {
          this.login = false;
        }
      },

    );


  }

}


