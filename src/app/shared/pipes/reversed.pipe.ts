import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversed'
})
export class ReversedPipe implements PipeTransform {
  transform(value: string):string {
    if(!value) return '' ;
    return value.split('').reverse().join('');
  }

}
