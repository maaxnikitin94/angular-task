import { ProfileState } from '@features/profile/interfaces/profile-state';
import { getProfileSuccess } from '@features/profile/store/profile.actions';
import { Action, createReducer, on } from '@ngrx/store';

export const profileInitialState = {};

const reducer = createReducer(
    profileInitialState,
    on(getProfileSuccess, (state: ProfileState, { profile }) => ({ ...state, profile }))
);

export function getProfileReducer (state: ProfileState, action: Action) {

    return reducer(state, action);

}
