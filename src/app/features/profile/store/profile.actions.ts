import { Profile } from '@features/profile/interfaces/profile';
import { createAction, props } from '@ngrx/store';

export const getProfilePending = createAction('[Profile] Get Profile Pending');
export const getProfileSuccess = createAction(
    '[Profile] Get Profile Success',
    props<{ profile?: Profile }>()
);
