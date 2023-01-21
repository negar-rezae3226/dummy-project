import { Directive, ElementRef, Input } from '@angular/core';
import { Gender } from '../models/gender.interface';

@Directive({
  selector: '[GanderDirective]',
})
export class GanderDirective {
  @Input('GanderDirective') userGender!: Gender;

  constructor(private element: ElementRef<HTMLElement>) {}

  ngOnInit() {
    this.element.nativeElement.className = this.genderIcon();
  }

  genderIcon(): any {
    let classList = "mdi";
    console.log(Gender.male);
    
    
    switch (this.userGender) {
      
      case Gender.male:
        classList += ' mdi-gender-male text-primary';
        break;
        
        case Gender.female:
        classList += " mdi-gender-female text-danger";
        break;

      default:
        break;
    }
    return classList;
  }
}
