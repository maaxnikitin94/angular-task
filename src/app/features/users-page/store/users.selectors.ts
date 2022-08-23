import { UsersState } from '@features/users-page/interfaces/users-state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getUsersState = createFeatureSelector<UsersState>('users');
export const getUsersFromState = createSelector(getUsersState, (state) => state.users);
