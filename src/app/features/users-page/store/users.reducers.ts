import { UsersState } from '@features/users-page/interfaces/users-state';
import { getUsersSuccess } from '@features/users-page/store/users.actions';
import { Action, createReducer, on } from '@ngrx/store';

export const usersInitialState: UsersState = {};

const usersReducer = createReducer(
    usersInitialState,
    on(getUsersSuccess, (state: UsersState, { users }) => ({ ...state, users }))
);

export function reducer (state: UsersState, action: Action) {

    return usersReducer(state, action);

}
