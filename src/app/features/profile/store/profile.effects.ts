import { Injectable } from '@angular/core';
import { UsersService } from '@features/users-page/services/users.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { IProfile } from '../interfaces/profile';
import { getProfilePending, getProfileSuccess } from '../store/profile.actions';

@Injectable()
export class ProfileEffects {

    getProfile$ = createEffect(() =>
        this.action$.pipe(
            ofType(getProfilePending),
            switchMap(() => this.usersService.getProfile()
            .pipe(map((profile: IProfile) => getProfileSuccess({ profile }))))
        ));

    constructor (private action$: Actions, private usersService: UsersService) {
    }

}
