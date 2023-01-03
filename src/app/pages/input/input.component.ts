import { Component, EventEmitter, Input, Output} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

@Input() labelInput = '';
@Input() inputType:"text"|"number"|"password"|"email"="text";
@Input() inputFormControl:any = '';



@Output() inputValue = new EventEmitter<string>();;
 
onInputValue(event: any){

  this.inputValue.emit(event.target.value);
  
}

// emailFormControl = new FormControl('', [Validators.required, Validators.email]);

// getErrorMessage() {
//   if (this.emailFormControl.hasError('required')) {
//     return 'You must enter a value';
//   }

//   return this.emailFormControl.hasError('email') ? 'Not a valid email' : '';
// }

}


