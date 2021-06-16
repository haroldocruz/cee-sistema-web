import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAccents'
})
export class FilterAccentsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
