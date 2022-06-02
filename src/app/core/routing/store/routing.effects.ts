import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { routingActions } from '@store/actions';
import { map, tap } from 'rxjs/operators';
import { RoutingService } from '../routing.service';

@Injectable()
export class RoutingEffects {

    go$ = createEffect(() => this.actions$.pipe(
        ofType(routingActions.go),
        map(({ path, queryParams, url }) => {

            if (url) {

                if (queryParams) {

                    this.routingService.toUrl(url, { queryParams });

                } else {

                    this.routingService.toUrl(url);

                }

            } else if (path) {

                this.routingService.toRoute(path, { queryParams: queryParams || null });

            }

        })
    ), { dispatch: false });

    reload$ = createEffect(() => this.actions$.pipe(
        ofType(routingActions.reload),
        tap(() => {

            this.routingService.reload();

        })
    ), { dispatch: false });

    constructor (private actions$: Actions, private routingService: RoutingService) {}

}
