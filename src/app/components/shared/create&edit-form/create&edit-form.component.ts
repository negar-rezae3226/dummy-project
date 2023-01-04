import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'create-edit-form',
  templateUrl: './create&edit-form.component.html',
  styleUrls: ['./create&edit-form.component.scss'],
})
export default class UserFormComponent implements OnInit {

@Input() user: User = {
    lastName: '',
    firstName: '',
    phone: '',
    email: '',
    gender: '',
    password: '',
    configPassword: '',
    username: '',
    id: 0,
  };

  hide = true;
  form!: FormGroup;

  constructor(private addUser: UsersService, private FormBuilder: FormBuilder , private router:Router) { }

  ngOnInit(): void {

    this.form = this.FormBuilder.group({
      nameFormControl: [null, [Validators.required, Validators.maxLength(10)]],
      familyFormControl: [null, [Validators.required, Validators.maxLength(10)]],
      usernameFormControl: [null, [Validators.required, Validators.maxLength(10)]],
      passwordFormControl: [null, [Validators.required, Validators.maxLength(10)]],
      emailFormControl: [null, [Validators.required, Validators.email]],
      confirmPassword: [null, [Validators.required, Validators.maxLength(10)]],

    })
  }

  onSubmit() {
    console.log();

    if (this.form.valid) {

      if (this.user.configPassword == this.user.password) {
        this.addUser.addNewUser(this.user);
        console.log(this.user);
      }
      else{
        alert("رمز عبور ها تطابق ندارند")
      }
    }
  }

  onSelected(value: string): void {
    this.user.gender = value;
  }

  redirect(){
    // if (this.form.valid) {
    // this.router.navigate(['/users-management'])
    // }
  }


}


