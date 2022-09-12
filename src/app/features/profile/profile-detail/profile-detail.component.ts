import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IProfile } from '@features/profile/interfaces/profile';
import { getProfilePending } from '@features/profile/store/profile.actions';
import { getUserProfile } from '@features/profile/store/profile.selectors';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { Observable } from 'rxjs';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'crx-profile-detail',
    styleUrls: ['./profile-detail.component.scss'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit {

    public profile$: Observable<IProfile>;

    constructor (private store: Store<AppState>) {
    }

    ngOnInit () {

        this.store.dispatch(getProfilePending());
        this.profile$ = this.store.select(getUserProfile);

    }

}
