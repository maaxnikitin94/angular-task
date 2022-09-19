import { Injectable } from '@angular/core';
import { IProfile } from '@features/profile/interfaces/profile';
import { getProfilePending, getProfileSuccess } from '@features/profile/store/profile.actions';
import { UsersService } from '@features/users-page/services/users.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { NotificationService } from '../../../libs/notification/services/notification.service';

@Injectable()
export class ProfileEffects {

    getProfile$ = createEffect(() =>
        this.action$.pipe(
            ofType(getProfilePending),
            switchMap(() => this.usersService.getProfile()
            .pipe(map((profile: IProfile) => {

                if (profile) {

                    this.notificationService.showNotification('Get Profile Success!', 3000, 'yellow');
                    return getProfileSuccess({ profile });

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
