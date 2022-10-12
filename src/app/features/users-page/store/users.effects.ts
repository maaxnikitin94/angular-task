import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { IUsers } from '../interfaces/users';
import { UsersService } from '../services/users.service';
import { getUsersPending, getUsersSuccess } from '../store/users.actions';

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
