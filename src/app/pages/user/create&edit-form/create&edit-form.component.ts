import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  buttonSubmit: boolean = true;


  hide = true;
  form!: FormGroup;

  constructor(private active: ActivatedRoute, private userService: UsersService, private FormBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    this.form = this.FormBuilder.group(
      {
        nameFormControl: [null, [Validators.required, Validators.maxLength(10)]],
        familyFormControl: [null, [Validators.required, Validators.maxLength(10)]],
        usernameFormControl: [null, [Validators.required, Validators.maxLength(10), Validators.minLength(6)]],
        passwordFormControl: [null, [Validators.required, Validators.pattern(regularExpression.password as string)]],
        confirmPassword: [null, [Validators.required, Validators.pattern(regularExpression.password as string)]],
        emailFormControl: [null, [Validators.required, Validators.email]],
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

      this.buttonSubmit = false;

      if (routerLink == '/users-management/edit/' + this.userId) {

        this.userService.editUser(this.userId, this.user).subscribe(
          response => {
            if (response.status) {
              this.buttonSubmit = true;

              if (response.status === 200) {
                this.router.navigate(['/users-management'])
              }
            }
          }
        );
      }

      else {
        this.userService.addNewUser(this.user).subscribe(
          response => console.log(response)
        );
      }
    }
    else {
      this.form.markAllAsTouched();
      return;
    }
  }


  onClickBack() {

    this.router.navigate(['/users-management'])

  }


}


export class regularExpression {

  static password?: string = "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}"


}