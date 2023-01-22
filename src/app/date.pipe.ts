import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: string): unknown {
   return new Date(value).toLocaleDateString('fa-Ir');
  }

}
