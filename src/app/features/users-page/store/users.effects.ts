import { Injectable } from '@angular/core';
import { IUsers } from '@features/users-page/interfaces/users';
import { UsersService } from '@features/users-page/services/users.service';
import { getUsersPending, getUsersSuccess } from '@features/users-page/store/users.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { NotificationService } from '../../../libs/notification/services/notification.service';

@Injectable()
export class UsersEffects {

    getUsers$ = createEffect(() =>
        this.action$.pipe(
            ofType(getUsersPending),
            switchMap(() => this.usersService.getUsers()
            .pipe(map((users: IUsers[]) => {

                if (users) {

                    this.notificationService.showNotification('Get Users Success!', 3000);
                    return getUsersSuccess({ users });

                } else {

                    return null;

                }

            })))
        ));

    constructor (
        private action$: Actions,
        private notificationService: NotificationService,
        private usersService: UsersService
    ) {
    }

}
