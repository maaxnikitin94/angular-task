import { Component } from '@angular/core';
import { NotificationService } from '@features/notification/services/notification.service';
import { IUsers } from '@features/users-page/interfaces/users';
import { getUsersPending } from '@features/users-page/store/users.actions';
import { getUsersFromState } from '@features/users-page/store/users.selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
    selector: 'crx-users-page',
    styleUrls: ['./users-page.component.scss'],
    templateUrl: './users-page.component.html'
})

export class UsersPageComponent {

    public users$: Observable<IUsers[]>;

    constructor (private store: Store, private notificationService: NotificationService) {

        this.store.dispatch(getUsersPending());
        this.users$ = this.store.select(getUsersFromState);
        this.notificationService.showNotification('Get Users Success!', 3000, 'green');

    }

}
