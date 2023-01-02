import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'create-edit-form',
  templateUrl: './create&edit-form.component.html',
  styleUrls: ['./create&edit-form.component.scss'],
})
export default class UserFormComponent implements OnInit {
  user: User = {
    lastName: '',
    firstName: '',
    phone: '',
    email: '',
    gender: '',
    password: '',
    username: '',
    id: 0,
  };

  hide = true;
  inputForm: FormGroup = new FormGroup('');

  constructor(private addUser: UsersService) {}

  ngOnInit(): void {
    this.inputForm = new FormGroup({
    firstName: new FormControl(null, Validators.required),
    lastName: new FormControl(null, Validators.required),
    userName: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
    phone: new FormControl(null, [
      Validators.required,
      Validators.maxLength(12),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    age: new FormControl(null, [
      Validators.required,
      Validators.max(150),
      Validators.min(1),
    ]),
    gender: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    this.addUser.addNewUser(this.user);
  }
  blurEvent(event: any) {
    this.user.gender=event.target.value;
  }
}

