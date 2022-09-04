import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUsers } from '@features/users-page/interfaces/users';
import { getUsersFail, getUsersPending, getUsersSuccess } from '@features/users-page/store/users.actions';
import { getUsersFromState } from '@features/users-page/store/users.selectors';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable, Subject, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
    selector: 'crx-users-page',
    styleUrls: ['./users-page.component.scss'],
    templateUrl: './users-page.component.html'
})

export class UsersPageComponent implements OnInit, OnDestroy {

    public isLoaded$ = new Subject<boolean>();
    private usersSubscription: Subscription;
    public users$: Observable<IUsers[]>;

    constructor (private store: Store, public actions$: Actions) {
    }

    ngOnInit () {

        this.usersSubscription = this.actions$.pipe(
            ofType(getUsersSuccess, getUsersFail),
            take(1)
        ).subscribe(() => this.isLoaded$.next(true));

        this.store.dispatch(getUsersPending());
        this.users$ = this.store.select(getUsersFromState);

    }

    ngOnDestroy () {

        this.usersSubscription.unsubscribe();

    }

}
