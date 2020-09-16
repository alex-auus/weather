import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'visibility',
})
export class VisibilityPipe implements PipeTransform {
  transform(value: any) {
    return value + 'mi';
  }
}
