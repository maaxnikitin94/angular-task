import { Component, OnInit } from '@angular/core';
import { IProfile } from '@features/profile/interfaces/profile';
import { getProfileFail, getProfilePending, getProfileSuccess } from '@features/profile/store/profile.actions';
import { getUserProfile } from '@features/profile/store/profile.selectors';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { Observable, Subject } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
    selector: 'crx-profile-detail',
    styleUrls: ['./profile-detail.component.scss'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit {

    public profile$: Observable<IProfile>;
    public isLoaded$ = new Subject<boolean>();

    constructor (private store: Store<AppState>, public actions$: Actions) {

        actions$.pipe(
            ofType(getProfileSuccess, getProfileFail),
            take(1)
        ).subscribe(() => this.isLoaded$.next(true));

    }

    ngOnInit () {

        this.store.dispatch(getProfilePending());
        this.profile$ = this.store.select(getUserProfile);

    }

}
