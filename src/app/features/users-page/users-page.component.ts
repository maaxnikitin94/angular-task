import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IUsers } from '@features/users-page/interfaces/users';
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

export class UsersPageComponent implements OnInit {

    public users$: Observable<IUsers[]>;

    constructor (private store: Store) {
    }

    ngOnInit () {

        this.store.dispatch(getUsersPending());
        this.users$ = this.store.select(getUsersFromState);

    }

}
