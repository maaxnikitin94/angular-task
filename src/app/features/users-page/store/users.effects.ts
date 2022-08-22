import { Injectable } from '@angular/core';
import { IUsers } from '@features/users-page/interfaces/users';
import { UsersService } from '@features/users-page/services/users.service';
import { getUsersPending, getUsersSuccess } from '@features/users-page/store/users.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class UsersEffects {

    getUsers$ = createEffect(() =>
        this.action$.pipe(
            ofType(getUsersPending),
            switchMap(() => this.usersService.getUsers()
            .pipe(map((users: IUsers[]) => getUsersSuccess({ users }))))
        ));

    constructor (private action$: Actions, private usersService: UsersService) {
    }

}
