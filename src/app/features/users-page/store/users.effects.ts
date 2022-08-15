import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsersService } from '@features/users-page/services/users.service';
import { getUsersPending, getUsersSuccess } from '@features/users-page/store/users.actions';
import { catchError, first, map, mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable()
export class UsersEffects {

    getUsers$ = createEffect(() =>
        this.action$.pipe(
            first(),
            ofType(getUsersPending),
            mergeMap(() =>
                this.usersService.getUsers().pipe(map((users) => getUsersSuccess(users.results)))),
            catchError(() => EMPTY)
        ));

    constructor (private action$: Actions, private usersService: UsersService) {
    }

}
