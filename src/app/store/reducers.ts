import { InjectionToken } from '@angular/core';
import * as fromRouting from '@core/routing/store/routing.reducers';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';

export interface AppState {
    routing: fromRouting.State;
}

export const APP_REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AppState>>(
    'App Reducers',
    { factory: () => ({ routing: fromRouting.reducer }) }
);

export function logger (reducer: ActionReducer<AppState>): ActionReducer<AppState> {

    return (state: AppState, action: any): AppState => reducer(state, action);

}

export const metaReducers: MetaReducer<AppState>[] = [logger];
