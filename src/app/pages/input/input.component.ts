import { Component, ElementRef, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})

enum InputType{
  text,
  email,
  number,
  password
}


export class InputComponent {

@Input() labelInput = '';
@Input() inputType:InputType;
@Input() inputFormControl = '';



@Output() inputValue = new EventEmitter<string>();;
 
blurEvent(event: any){

  this.inputValue.emit(event.target.value);
  
}

}
