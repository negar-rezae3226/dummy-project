import { Directive, Input } from '@angular/core';

export enum gender {
  male = 'male' , 
  female = 'female'
}

@Directive({
  selector: '[GanderDirective]'
})
 


export class GanderDirective {

@Input() userGender:any = gender;


  constructor() { 
console.log(this.userGender.female);

  }
  

}
