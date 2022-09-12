import { Injectable } from '@angular/core';
import { IUsers } from '@features/users-page/interfaces/users';
import { UsersService } from '@features/users-page/services/users.service';
import { getUsersPending, getUsersSuccess } from '@features/users-page/store/users.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs/operators';
import { NotificationService } from '../../../libs/notification/services/notification.service';

@Injectable()
export class UsersEffects {

    getUsers$ = createEffect(() =>
        this.action$.pipe(
            ofType(getUsersPending),
            switchMap(() => this.usersService.getUsers()
            .pipe(
                tap((value) =>
                    value
                        ? this.notificationService.showNotification('Get Profile Success!', 3000)
                        : null),
                map((users: IUsers[]) => getUsersSuccess({ users }))
            ))
        ));

    constructor (
        private action$: Actions,
        private usersService: UsersService,
        private notificationService: NotificationService
    ) {
    }

}
