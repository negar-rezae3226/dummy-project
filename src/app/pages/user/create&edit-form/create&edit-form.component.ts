import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.interface';
import { UsersService } from 'src/app/services/users.service';
import { ValidationComponent } from '../../validation/validation.component';
@Component({
  selector: 'create-edit-form',
  templateUrl: './create&edit-form.component.html',
  styleUrls: ['./create&edit-form.component.scss'],
})
export default class UserFormComponent implements OnInit {

  @Input() user: User = {};
  userId: number = 0;
  matchPassword: boolean = true;


  hide = true;
  form!: FormGroup;

  constructor(private active: ActivatedRoute, private userService: UsersService, private FormBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    this.form = this.FormBuilder.group(
      {
        nameFormControl: [null, [Validators.required, Validators.maxLength(10), Validators.minLength(3)]],
        familyFormControl: [null, [Validators.required, Validators.maxLength(10), Validators.minLength(3)]],
        usernameFormControl: [null, [Validators.required, Validators.maxLength(10), Validators.minLength(3)]],
        passwordFormControl: [null, [Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}') ]  ],
        emailFormControl: [null, [Validators.required, Validators.email]],
        confirmPassword: [null, [Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
        ageFormControl: [null],
        telephoneFormControl: [null]
      },
      {
        validators: [ValidationComponent.match('passwordFormControl', 'confirmPassword')]
      }
    )
  }

  onSubmit() {


    this.userId = +this.active.snapshot.params['id'];

    console.log("form", this.form);


    let routerLink = this.router.url;

    if (this.form.valid) {

      if (routerLink == '/users-management/edit/' + this.userId) {
        this.userService.editUser(this.userId, this.user);
      }
      else {
        this.userService.addNewUser(this.user);
        console.log(this.user);
      }
    }
    else {
      this.form.markAllAsTouched();
      return;
    }
  }
  redirect() {
    // if (this.form.valid) {
    // this.router.navigate(['/users-management'])
    // }

  }


}


