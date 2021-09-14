import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { IProfileCard, IProfileCardOptions } from 'src/app/directives/profile-card/profile-card.component';
import { IAddress, IEmail, IPhone } from 'src/app/interfaces/Contact';
import { GenderEnum, IUser, User } from 'src/app/interfaces/User';
import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-cee-user-bind',
  templateUrl: './cee-user-bind.component.html',
  styleUrls: ['./cee-user-bind.component.less']
})
export class CeeUserBindComponent implements OnInit {

  cpf: string;
  profileCard: IProfileCard;
  profileCardOpions: IProfileCardOptions;
  user: IUser;

  constructor(
    public bsModalRef: BsModalRef,
    private userService: UserService,
    public utilService: UtilService,
    private notifyService: NotificationService
  ) { }

  ngOnInit(): void {
    this.cpf = '';
    this.user = new User();
    this.profileCardOpions = {
      btnAssignProfile: true
    }
  }

  getUser() {
    if (this.cpf === '') {
      this.notifyService.showWarning(`Por favor, insira um CPF válido!`, `Status 400`);
      return;
    }

    let user = {};
    user['cpf'] = this.cpf;
    this.userService.readFilter(user).subscribe((data) => {
      console.log(data)
      if (data.length === 0 || data.statusCode) {
        this.profileCard = {} as IProfileCard;
        this.notifyService.showWarning(data.statusMessage, `Ops! ${data.statusCode}`);
      }
      else {
        this.user = data[0];

        const address: IAddress = (data[0].contact?.addressList.length > 0) ? data[0].contact.addressList[0] : null;
        const phone: IPhone = (data[0].contact?.phoneList.length > 0) ? data[0].contact.phoneList[0] : null;
        const email: IEmail = (data[0].contact?.emailList.length > 0) ? data[0].contact.emailList[0] : null;
        this.profileCard = {
          userId: data[0]._id,
          group: data[0].dataAccess?.group || { name: '' },
          userName: data[0].name,
          profileName: data[0].currentProfile?.name || '',
          address: (address != null) ? `${address.place}, ${address.number}, ${address.district}, ${address.city}, ${address.state}, ${address.zipcode}` : '',
          phone: (phone != null) ? `${phone.number}` : '',
          email: (email != null) ? `${email.address}` : '',
          avatar: (data[0].gender == GenderEnum.MALE) ? "../../../../assets/avatar5.png"
            : (data[0].gender == GenderEnum.FEMALE) ? "../../../../assets/avatar2.png"
              : (data[0].gender == GenderEnum.UNINFORMED) ? "../../../../assets/avatar.png"
                : "../../../../assets/logo-1257x577-alpha3.png"
        }

        this.notifyService.showSuccess(`Usuário localizado!`, `Status 200`);
      }
    });
  }

}
