import { ActivatedRouteSnapshot } from '@angular/router';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './routing.reducers';

const currentRoute = (state: State): ActivatedRouteSnapshot => state.currentRoute;

const currentRouteName = (state: State): string => state.name;

const inProgress = (state: State): boolean => state.inProgress;

const params = (state: State): Record<string, string> => state.params;

const prevRoute = (state: State): ActivatedRouteSnapshot => state.prevRoute;

const prevUrl = (state: State): string => {

    if (state.history.length < 2) {

        return null;

    }
    return state.history[state.history.length - 2].url || null;

};

const queryParams = (state: State): Record<string, string> => state.queryParams;

const url = (state: State): string => state.url;

export const getRouterState = createFeatureSelector<State>('routing');

export const getCurrentRoute = createSelector(getRouterState, currentRoute);
export const getCurrentRouteName = createSelector(getRouterState, currentRouteName);
export const getTransitionInProgress = createSelector(getRouterState, inProgress);
export const getParams = createSelector(getRouterState, params);
export const getPrevState = createSelector(getRouterState, prevRoute);
export const getPrevUrl = createSelector(getRouterState, prevUrl);
export const getQueryParams = createSelector(getRouterState, queryParams);
export const getUrl = createSelector(getRouterState, url);
