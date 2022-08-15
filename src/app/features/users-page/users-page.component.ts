import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { getUsersPending } from '@features/users-page/store/users.actions';
import { Store } from '@ngrx/store';
import { getUsersState } from '@features/users-page/store/users.selectors';
import { map } from 'rxjs/operators';

@Component({
    selector: 'crx-users-page',
    styleUrls: ['./users-page.component.scss'],
    templateUrl: './users-page.component.html'
})

export class UsersPageComponent {

    public users$: Observable<any>;

    constructor (private store: Store) {

        this.store.dispatch(getUsersPending());
        this.users$ = this.store.select(getUsersState).pipe(map((value) => Object.values(value).slice(0, -1)));

    }

}
