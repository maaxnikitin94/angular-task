import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getUserState = createFeatureSelector('users');
export const getUsersState = createSelector(getUserState, (state: any) => state);
