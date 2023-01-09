import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.interface';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {


  @Input() labelInput = '';
  @Input() formControlInput = '';
  @Input() inputType: "text" | "number" | "password" | "email" = "text";
  @Input() inputFormControl: FormControl | any;
  @Input() form: FormGroup | any;
  @Input() value: any = "";


  @Output() inputValue = new EventEmitter<any>();

  ngOnInit(): void {
    this.onEmitValue();

  }


  onEmitValue() {
    this.inputValue.emit(this.value);
  }


}


