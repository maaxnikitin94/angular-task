import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { IUsers } from '@features/users-page/interfaces/users';
import { getUsersPending } from '@features/users-page/store/users.actions';
import { getUsersFromState } from '@features/users-page/store/users.selectors';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { NotificationService } from '../../libs/notification/services/notification.service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'crx-users-page',
    styleUrls: ['./users-page.component.scss'],
    templateUrl: './users-page.component.html'
})

export class UsersPageComponent implements OnInit, OnDestroy {

    public users$: Observable<IUsers[]>;
    private usersSubscription: Subscription;

    constructor (private store: Store, private notificationService: NotificationService) {
    }

    ngOnInit () {

        this.store.dispatch(getUsersPending());
        this.users$ = this.store.select(getUsersFromState);
        this.usersSubscription = this.users$.subscribe((value) => value
            ? this.notificationService.showNotification('Get Profile Success!', 3000, 'green')
            : null);

    }

    ngOnDestroy () {

        this.usersSubscription.unsubscribe();

    }

}
