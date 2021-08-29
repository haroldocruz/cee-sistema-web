import { ProfileService } from './../../../services/profile.service';
import { IProfile } from './../../../interfaces/Profile';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { cloneDeep } from 'lodash';
import { IPhone } from './../../../interfaces/Contact';
import { User, IUser } from './../../../interfaces/User';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile-edit-modal',
  templateUrl: './user-profile-edit-modal.component.html',
  styleUrls: ['./user-profile-edit-modal.component.less']
})
export class UserProfileEditModalComponent implements OnInit {

  @Input() user: IUser;
  profileListFiltered: Array<IProfile>;
  profileList: Array<IProfile>;
  profile: IProfile;
  contextList;
  context;
  scopeList;
  scope;
  groupList;
  group;
  nameList;
  phoneListRef: IPhone[];
  phone: IPhone;
  phoneList: IPhone[];

  constructor(
    private profileService: ProfileService,
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit(): void {
    this.phone = {};
    this.nameList = ['Administrador', 'Gerente'];
    // this.context = {name:'asdf'};
    this.contextList = [
      { refPath: 'cee', sigla: 'CEE', name: 'Conselho Estadual de Educação' },
      { refPath: 'cee', sigla: 'SEDUC', name: 'Secretaria da Educação, Juventude e Esportes' },
      { refPath: 'cee', sigla: 'DRE', name: 'Diretoria Regional de Ensino' },
      { refPath: 'cee', sigla: 'IE/UE', name: 'Instituição/Unidade de Ensino' },
      { refPath: 'cee', sigla: '', name: 'Outro' }
    ];
    this.profileListFiltered = [];
    this.profile = { context: "Administrador", name: "Gerente" }
  }

  watchChangeProfileContext(){
    console.log(JSON.stringify(this.context))
    this.profileList = this.getProfileListFiltered(this.context.refPath);
  }

  watchChangeProfileName(name){
    this.profileList = this.getProfileListFiltered(name);
  }

  getProfileListFiltered(context) {
    //TODO: buscar perfil filtrado pelo contexto

    this.profileService.readFilter(context).subscribe(data =>{
      console.log(data)
      this.profileList = data;
    })

    return [{
      name: 'Administrador',
      description: 'Administrador'
    }]
  }

  insertPhone() {
    this.phoneList.push(this.phone);
    this.phone = {};
  }

  editPhone(phone: IPhone) {
    this.phone = cloneDeep(phone);
    this.removePhone(phone);
  }

  removePhone(phone: IPhone) {
    const idx = this.phoneList.indexOf(phone);
    this.phoneList.splice(idx, 1);
  }

  confirm() {
    this.phoneListRef.splice(0, this.phoneListRef.length)
    this.phoneListRef.push(...this.phoneList);
    this.bsModalRef.hide();
  }
}
