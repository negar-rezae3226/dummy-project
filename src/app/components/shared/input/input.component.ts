import { Component, DoCheck, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.interface';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements DoCheck {


  @Input() labelInput = '';
  @Input() formName = '';
  @Input() formControlInput = '';
  @Input() inputType: "text" | "number" | "password" | "email" = "text";
  @Input() inputFormControl: FormControl | any;
  @Input() form: FormGroup | any;
  @Input() value: any = "";
  hide: boolean = true;
  hideIcon: boolean = false;

  @Output() inputValue = new EventEmitter<any>();

  ngOnInit(): void {
    this.onEmitValue();

  }


  onEmitValue() {
    this.inputValue.emit(this.value);
    if (this.value && this.formName == 'password') {
      
      this.hideIcon=true;
    }

  }


  ngDoCheck(): void {



    }



}
