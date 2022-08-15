import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { profileActions } from '@store/actions';
import { AppState } from '@store/reducers';
import { getUsersState } from '@features/users-page/store/users.selectors';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'crx-profile-detail',
    styleUrls: ['./profile-detail.component.scss'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit {

    public user$: Observable<any>;

    constructor (private store: Store<AppState>, private activeRoute: ActivatedRoute) {
    }

    ngOnInit () {

        const id = this.activeRoute.snapshot.params.id;
        this.store.dispatch(profileActions.initProfile());
        this.user$ = this.store.select(getUsersState)
        .pipe(map((value) => Object.values(value).slice(0, -1).filter((val: any) => val.id.name === id)));

    }

}
