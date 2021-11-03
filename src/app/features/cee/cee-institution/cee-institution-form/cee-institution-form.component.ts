import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { GroupService } from 'src/app/services/group.service';
import { AdministrativeSphereEnum } from 'src/app/interfaces/enumerations/administrativeSphereEnum';
import { InstitutionTypeEnum } from 'src/app/interfaces/enumerations/InstitutionTypeEnum';
import { Group, IGroup } from 'src/app/interfaces/Group';

@Component({
  selector: 'app-cee-institution-form',
  templateUrl: './cee-institution-form.component.html',
  styleUrls: ['./cee-institution-form.component.less']
})
export class CeeInstitutionFormComponent implements OnInit {
  
  @Input() public group: IGroup;
  @Input() public groupId: String;

  public isLoading: boolean = false;

  public groupTypeList: String[];
  public administrativeSphereList: String[];

  constructor(
    public bsModalRef: BsModalRef,
    private groupService: GroupService
  ) {
    this.group = new Group();
  }

  ngOnInit(): void {
    this.groupTypeList = Object.values(InstitutionTypeEnum);
    this.administrativeSphereList = Object.values(AdministrativeSphereEnum);

    this.init();
  }

  init(){
    if (this.group?._id) return;

    if (!this.groupId){ this.group = new Group(); return; }

    //!APAGAR
    if (this.groupId){ this.group = { _id: `${this.groupId}`, socialReason: `${this.groupId}`, name: `Escola ${this.group.name}`, initials: this.group.initials }; return; }

    this.isLoading = true;
    this.groupService.readById(this.groupId).subscribe((data) => {
      if(data._id)
        this.group = data;
        
      this.isLoading = false;
    });
  }

  create() { }
  update() { }

}
