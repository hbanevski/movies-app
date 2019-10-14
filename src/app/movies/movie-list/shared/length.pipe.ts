import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'LengthPipe'
})
export class LengthPipe implements PipeTransform {
  transform(value: number): string {
    let hours;
    let minutes;
    let result = '';

    hours = Math.floor(value / 60);
    minutes = value % 60;

    result += hours ? hours + ' hour(s) ' : '';
    result += minutes ? minutes + ' minutes' : '';

    return result;
    }
  }
