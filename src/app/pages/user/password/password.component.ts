import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent {
  @Input() labelInput = '';
  @Input() formControlInput = '';
  @Input() inputType: "text" | "number" | "password" | "email" = "text";
  @Input() form: FormGroup | any;
  @Input() value:any="";

  @Output() inputValue = new EventEmitter<any>();

  ngOnInit(): void {
    this.onEmitValue();
  }


  onEmitValue() {
    this.inputValue.emit(this.value);
  }


// All is this method
onPasswordChange() {
  if (this.confirm_password.value == this.password.value) {
    this.confirm_password.setErrors(null);
  } else {
    this.confirm_password.setErrors({ mismatch: true });
  }
}

// getting the form control elements
get password(): AbstractControl {
  return this.form.controls['password'];
}

get confirm_password(): AbstractControl {

  return this.form.controls['confirm_password'];
}
}
