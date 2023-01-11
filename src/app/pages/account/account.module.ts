import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { SharedModule } from 'src/app/components/shared/shared.module';




@NgModule({
  declarations: [

  ],
  imports: [
    // LoginModule,
    CommonModule,
    SharedModule
  ]
})
export class AccountModule { }
