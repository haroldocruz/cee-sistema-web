import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'callback',
  pure: false
})
export class CallbackPipe implements PipeTransform {

  transform(items: unknown[], callback: (item: any) => boolean): unknown {
    if (!items || !callback)
      return items;
    return null;
  }

}

// @Component({
//   ....
// })
// export class UsersComponent {
//   filterUser(user: IUser) {
//     return !user.age >= 18
//   }
// }

// <li *ngFor="let user of users | callback: filterUser">{{user.name}}</li>
