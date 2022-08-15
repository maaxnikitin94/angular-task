import { Action, createReducer, on } from '@ngrx/store';
import { getUsersSuccess } from '@features/users-page/store/users.actions';

export const usersInitialState = {};

const usersReducer = createReducer(
    usersInitialState,
    on(getUsersSuccess, (state, users) => users)
);

export function reducer (state: any, action: Action) {

    return usersReducer(state, action);

}
