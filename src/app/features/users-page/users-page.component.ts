import { ChangeDetectionStrategy, Component } from '@angular/core';
import { User } from '@features/users-page/interfaces/users';
import { getUsersPending } from '@features/users-page/store/users.actions';
import { getUsersFromState } from '@features/users-page/store/users.selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'crx-users-page',
    styleUrls: ['./users-page.component.scss'],
    templateUrl: './users-page.component.html'
})

export class UsersPageComponent {

    public users$: Observable<User[]>;

    constructor (private store: Store) {

        this.store.dispatch(getUsersPending());
        this.users$ = this.store.select(getUsersFromState);

    }

    userTrackById (index: number, user: User) {

        return user.id;

    }

}
