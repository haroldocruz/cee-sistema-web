import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProfileLocalService } from './../profile.local.service';
// import { distinctUntilChanged } from 'rxjs/operators';
// import { debounceTime } from 'rxjs/operators';
// import { map } from 'rxjs/operators';
// import { fromEvent, Observable } from 'rxjs';
// import { IProfile, Profile } from 'src/app/interfaces/Profile';
import { UserLocalService } from '../../user/user.local.service';
import { AuthService } from 'src/app/auth/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-personal',
  templateUrl: './profile-personal.component.html',
  styleUrls: ['./profile-personal.component.less']
})
export class ProfilePersonalComponent implements OnInit, OnDestroy {

  // public filterInputId = new FormControl();
  // public filtro: string;

  constructor(
    private route: ActivatedRoute,
    public profileLocalService: ProfileLocalService,
    private userService: UserLocalService
    ) { }

  ngOnInit(): void {
    
    this.route.queryParams.subscribe((params) => {

      let id: string = params['userId'] || AuthService.user._id;
      
      this.userService.readById(id).subscribe((data) => {
        ProfileLocalService.user = data;
      });
    });

  //   this.typeahead(document.getElementById('search-box')).subscribe(data => {
  //     this.profileLocalService.filtro = data;
  //   });
  // }

  // typeahead(elem: Element): Observable<any>{
  //   // const searchBox = ;

  //   return fromEvent(elem, 'input').pipe(
  //     map((e) => (e.target as HTMLInputElement).value),
  //     // map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),
  //     // filter(text => text.length > 2),
  //     debounceTime(600),
  //     distinctUntilChanged()
  //     // switchMap(() => ajax('/api/endpoint'))
  //   );
  // }

  // edit(profile: IProfile | null) {
  //   ProfileLocalService.profile = (profile) ? profile : new Profile();
  }

  ngOnDestroy(){
    console.log("ProfileComponent destruído!");
  }
}
