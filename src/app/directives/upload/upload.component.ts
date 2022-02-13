import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { } from "lodash";
import { BsModalRef } from 'ngx-bootstrap/modal';

import { UtilService } from 'src/app/services/util.service';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/interfaces/User';
import { EventEmitterService } from 'src/app/services/event-emitter.service';

export interface IUploadComponentOptions {
  isAvatar: boolean;
  isFile: boolean;
  accept: ('*' | 'image/*' | 'image/png' | 'image/jpg' | 'image/gif' | 'application/pdf')[];
  isMultiple: boolean;
}

@Component({
  selector: 'sd-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.less']
})
export class UploadComponent implements OnInit, OnDestroy {

  @Input() options: IUploadComponentOptions;
  @Input() user: IUser;

  private subDestroy$ = new Subject();

  fileList: File[] = [];
  file: File = null;

  avatarList: string[] = [];

  constructor(
    public bsModalRef: BsModalRef,
    private userService: UserService
  ) { }

  ngOnDestroy(): void {
    this.subDestroy$.next();
    this.subDestroy$.complete();
  }

  ngOnInit(): void {
    this.onAvatarReader()
  }

  onSelect(event) {
    console.log(event);
    (this.options.isMultiple)
      ? this.fileList.push(...event.addedFiles)
      : this.file = event.addedFiles[0];
  }

  onRemove(event) {
    // console.log(event);
    if (this.options.isMultiple)
      this.fileList.splice(this.fileList.indexOf(event), 1);
  }

  onAvatarReader(){
    for(let i = 0; i < 5; i++){
      this.avatarList.push(`../../../../assets/avatar${i+1}.png`)
    }
  }

  public upload() {
    if (!UtilService.isConfirm()) return;
    const data = new FormData();
    data.append('image', this.file);

    this.userService.uploadImage(this.user, data)
    .pipe(takeUntil(this.subDestroy$))
    .subscribe((data)=>{
      UtilService.notifying.showSuccess()
      EventEmitterService.get('is-success').emit();
    });

    this.bsModalRef.hide();
  }

  public onClean() {
    (this.options.isMultiple)
      ? this.fileList.length = 0
      : this.file = null;
  }

}
