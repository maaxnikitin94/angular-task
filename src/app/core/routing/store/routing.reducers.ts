import { ActivatedRouteSnapshot } from '@angular/router';
import { RouteHistoryMember } from '@interfaces';
import { createReducer, on } from '@ngrx/store';
import { routingActions } from '@store/actions';

export interface State {
    currentRoute: ActivatedRouteSnapshot;
    history: RouteHistoryMember[];
    inProgress: boolean;
    name: string;
    params?: Record<string, string>;
    prevRoute?: ActivatedRouteSnapshot;
    queryParams?: Record<string, string>;
    url: string;
}

export const initialState: State = {
    currentRoute: null,
    history: [],
    inProgress: false,
    name: null,
    params: null,
    prevRoute: null,
    queryParams: null,
    url: '/'
};

export const reducer = createReducer(
    initialState,
    on(routingActions.reload, (state) => ({ ...state, inProgress: false })),
    on(routingActions.start, (state) => ({ ...state, inProgress: true })),
    on(routingActions.success, (state, payload) =>
        ({ ...state, ...payload, inProgress: false, prevRoute: state.currentRoute }))
);
