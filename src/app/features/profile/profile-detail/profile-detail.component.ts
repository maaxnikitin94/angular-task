import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { IProfile } from '@features/profile/interfaces/profile';
import { getProfilePending } from '@features/profile/store/profile.actions';
import { getUserProfile } from '@features/profile/store/profile.selectors';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { Observable, Subscription } from 'rxjs';
import { NotificationService } from '../../../libs/notification/services/notification.service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'crx-profile-detail',
    styleUrls: ['./profile-detail.component.scss'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit, OnDestroy {

    public profile$: Observable<IProfile>;
    private profileSubscription: Subscription;

    constructor (private store: Store<AppState>, private notificationService: NotificationService) {
    }

    ngOnInit () {

        this.store.dispatch(getProfilePending());
        this.profile$ = this.store.select(getUserProfile);
        this.profileSubscription = this.profile$.subscribe((value) => value
            ? this.notificationService.showNotification('Get Profile Success!', 3000, 'yellow')
            : null);

    }

    ngOnDestroy () {

        this.profileSubscription.unsubscribe();

    }

}
