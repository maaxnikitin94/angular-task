import { ProfileState } from '@features/profile/interfaces/profile-state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getProfileState = createFeatureSelector<ProfileState>('profile');
export const getUserProfile = createSelector(getProfileState, (state) => state.profile);
