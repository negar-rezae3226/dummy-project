import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'create-edit-form',
  templateUrl: './create&edit-form.component.html',
  styleUrls: ['./create&edit-form.component.scss'],
})
export default class UserFormComponent implements OnInit {
  hide = true;
  inputForm: FormGroup = new FormGroup('');
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  ngOnInit(): void {
    this.inputForm = new FormGroup({
      // firstName: new FormControl(null, Validators.required),
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
    console.log(this.inputForm);
  }
}
