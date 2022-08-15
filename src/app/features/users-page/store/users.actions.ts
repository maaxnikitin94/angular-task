import { createAction, props } from '@ngrx/store';

export const getUsersPending = createAction('[Users] Get Users Pending');
export const getUsersSuccess = createAction(
    '[Users] Get Users Success',
    props<{ users?: any }>()
);
