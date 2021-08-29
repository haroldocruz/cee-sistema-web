import { ProfileService } from './profile.service';
import { distinctUntilChanged } from 'rxjs/operators';
import { debounceTime } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { IProfile, Profile } from 'src/app/interfaces/Profile';
import { UserService } from '../user/user.service';
import { AuthService } from 'src/app/auth/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {

  // public filterInputId = new FormControl();
  public filtro: string;

  constructor(
    private route: ActivatedRoute,
    public profileService: ProfileService,
    private userService: UserService
    ) { }

  ngOnInit(): void {
    
    this.route.queryParams.subscribe((params) => {

      let id: string = params['userId'] || AuthService.user._id;
      
      this.userService.readById(id).subscribe((data) => {
        ProfileService.user = data;
      });
    });

    this.typeahead(document.getElementById('search-box')).subscribe(data => {
      this.profileService.filtro = data;
    });
  }

  typeahead(elem: Element): Observable<any>{
    // const searchBox = ;

    return fromEvent(elem, 'input').pipe(
      map((e) => (e.target as HTMLInputElement).value),
      // map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),
      // filter(text => text.length > 2),
      debounceTime(600),
      distinctUntilChanged()
      // switchMap(() => ajax('/api/endpoint'))
    );
  }

  edit(profile: IProfile | null) {
    ProfileService.profile = (profile) ? profile : new Profile();
  }
}
