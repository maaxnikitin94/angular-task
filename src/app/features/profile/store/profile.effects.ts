import { Injectable } from '@angular/core';
import { IProfile } from '@features/profile/interfaces/profile';
import { getProfileFail, getProfilePending, getProfileSuccess } from '@features/profile/store/profile.actions';
import { UsersService } from '@features/users-page/services/users.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable()
export class ProfileEffects {

    getProfile$ = createEffect(() =>
        this.action$.pipe(
            ofType(getProfilePending),
            switchMap(() => this.usersService.getProfile()
            .pipe(
                map((profile: IProfile) => getProfileSuccess({ profile })),
                catchError(() => of(getProfileFail))
            ))
        ));

    constructor (private action$: Actions, private usersService: UsersService) {
    }

}
