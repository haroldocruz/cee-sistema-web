import { Component, OnInit } from '@angular/core';
import { IAddress } from 'src/app/interfaces/Contact';
import { IUser } from 'src/app/interfaces/User';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-profile-main-userdata',
  templateUrl: './profile-main-userdata.component.html',
  styleUrls: ['./profile-main-userdata.component.less']
})
export class ProfileMainUserdataComponent implements OnInit {

  user:IUser
  Ps = ProfileService

  constructor() { }

  ngOnInit(): void {
    this.user = ProfileService.user;
  }

  addressToString(address: IAddress) {
    const array = [address.zipcode, address.country, address.state, address.city, address.district, address.place, address.number]
    let result = ''
    array.forEach((e, i, l) => {
        if (e)
        result += (result.length > 0) ? ', ' + e : e;
    })
    return result;
}

}
