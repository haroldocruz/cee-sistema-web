import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'callback2',
  pure: false
})
export class Callback2Pipe implements PipeTransform {

  transform(items: any[], callback: (item: any, callbackArgs?: any[]) => boolean, callbackArgs?: any[]): any {
    if (!items || !callback) {
      return items;
    }
    return items.filter(item => callback(item, callbackArgs));
  }

}

// component

// filterSomething(something: Something, filterArgs: any[]) {
//   const firstArg = filterArgs[0];
//   const secondArg = filterArgs[1];
//   ...
//   return <some condition based on something, firstArg, secondArg, etc.>;
// }

// html

// <li *ngFor="let s of somethings | callback : filterSomething : [<whatWillBecomeFirstArg>, <whatWillBecomeSecondArg>, ...]">
//   {{s.aProperty}}
// </li>
