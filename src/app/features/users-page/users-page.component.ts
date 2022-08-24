import { Component } from '@angular/core';
import { IUsers } from '@features/users-page/interfaces/users';
import { getUsersFail, getUsersPending, getUsersSuccess } from '@features/users-page/store/users.actions';
import { getUsersFromState } from '@features/users-page/store/users.selectors';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
    selector: 'crx-users-page',
    styleUrls: ['./users-page.component.scss'],
    templateUrl: './users-page.component.html'
})

export class UsersPageComponent {

    public users$: Observable<IUsers[]>;
    public isLoaded$ = new Subject<boolean>();

    constructor (private store: Store, public actions$: Actions) {

        actions$.pipe(
            ofType(getUsersSuccess, getUsersFail),
            take(1)
        ).subscribe(() => this.isLoaded$.next(true));

        this.store.dispatch(getUsersPending());
        this.users$ = this.store.select(getUsersFromState);

    }

}
