import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uv',
})
export class UVPipe implements PipeTransform {
  transform(value: any) {
    let severity: string = '';
    if (value <= 2) {
      severity = 'Low';
    } else if (value <= 5) {
      severity = 'Medium';
    } else if (value <= 7) {
      severity = 'High';
    } else if (value <= 10) {
      severity = 'Very High';
    } else {
      severity = 'Extremely High';
    }

    return severity + ' ' + value;
  }
}
