import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { UserLocalService } from 'src/app/features/user/user.local.service';
import { IAddress } from 'src/app/interfaces/Contact';
import { IUser } from 'src/app/interfaces/User';
import { ProfileLocalService } from '../../profile.local.service';

@Component({
  selector: 'app-profile-main-userdata',
  templateUrl: './profile-main-userdata.component.html',
  styleUrls: ['./profile-main-userdata.component.less']
})
export class ProfileMainUserdataComponent implements OnInit {

  user:IUser
  profileLocalService = ProfileLocalService;

  constructor(
    private route: ActivatedRoute,
    // public profileLocalService: ProfileLocalService,
    private userService: UserLocalService
  ) { }

  ngOnInit(): void {
    // this.user = ProfileLocalService.user;
    
    // this.route.queryParams.subscribe((params) => {
    //   console.log(this.profileLocalService.user.name)

    //   let id: string = params['userId'] || this.profileLocalService.userId || AuthService.user._id;
      
    //   this.userService.readById(id).subscribe((data) => {
    //     this.profileLocalService.user = data;
    //     this.profileLocalService.userId = data._id;
    //   });
    // });
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
