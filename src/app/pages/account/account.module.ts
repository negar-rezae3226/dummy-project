import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    // LoginModule,
    CommonModule
  ]
})
export class AccountModule { }
