import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProfile } from '@features/profile/interfaces/profile';
import { getProfileFail, getProfilePending, getProfileSuccess } from '@features/profile/store/profile.actions';
import { getUserProfile } from '@features/profile/store/profile.selectors';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { Observable, Subject, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
    selector: 'crx-profile-detail',
    styleUrls: ['./profile-detail.component.scss'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit, OnDestroy {

    public isLoaded$ = new Subject<boolean>();
    private profileSubscription: Subscription;
    public profile$: Observable<IProfile>;

    constructor (private store: Store<AppState>, public actions$: Actions) {
    }

    ngOnInit () {

        this.profileSubscription = this.actions$.pipe(
            ofType(getProfileSuccess, getProfileFail),
            take(1)
        ).subscribe(() => this.isLoaded$.next(true));

        this.store.dispatch(getProfilePending());
        this.profile$ = this.store.select(getUserProfile);

    }

    ngOnDestroy () {

        this.profileSubscription.unsubscribe();

    }

}
