import { Injectable } from '@angular/core';
import {
    ActivatedRoute,
    ActivatedRouteSnapshot,
    Event,
    NavigationCancel,
    NavigationEnd,
    NavigationError,
    NavigationExtras,
    NavigationStart,
    Params,
    Router,
    RoutesRecognized
} from '@angular/router';
import { RouteData, RouteHistoryMember } from '@interfaces';
import { Store } from '@ngrx/store';
import { routingActions } from '@store/actions';
import { AppState } from '@store/reducers';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class RoutingService {

    // I suggest refactoring this to be a public ReplaySubject
    private history: RouteHistoryMember[] = [];
    private reloading = false;

    get currentFragment (): string | null {

        const tree = this.router.parseUrl(this.router.url);
        return tree.fragment;

    }

    get currentName (): string {

        return this.childRoute.data.name;

    }

    get currentPath (): string {

        return this.router.url.split('?')[0];

    }

    get currentUrl (): string {

        return this.router.url;

    }

    get data (): RouteData {

        return this.childRoute.data;

    }

    get end$ (): Observable<Event> {

        return this.router.events.pipe(filter((event) => event instanceof NavigationEnd
            || event instanceof NavigationError || event instanceof NavigationCancel));

    }

    get error$ (): Observable<Event> {

        return this.router.events.pipe(filter((event) => event instanceof NavigationError));

    }

    get previousName (): string {

        return this.previousRoute && this.previousRoute.name || null;

    }

    get previousPath (): string {

        return this.previousUrl ? this.previousUrl.split('?')[0] : null;

    }

    get previousRoute (): RouteHistoryMember {

        return this.history[this.history.length - 2] || null;

    }

    get previousUrl (): string {

        return this.previousRoute && this.previousRoute.url || null;

    }

    get queryParams (): Record<string, any> {

        return this.getQueryParams();

    }

    get queryParams$ (): Observable<Params> {

        return this.route.firstChild.queryParams;

    }

    get routeParams (): Record<string, string> {

        return this.getRouteParams();

    }

    get routeParams$ (): Observable<Params> {

        return this.route.firstChild.paramMap;

    }

    get routesRecognized$ (): Observable<Event> {

        return this.router.events.pipe(filter((event) => event instanceof RoutesRecognized));

    }

    get start$ (): Observable<Event> {

        return this.router.events.pipe(filter((event) => event instanceof NavigationStart));

    }

    get success$ (): Observable<Event> {

        return this.router.events.pipe(filter((event) => event instanceof NavigationEnd));

    }

    private get childRoute (): ActivatedRouteSnapshot {

        let route = this.router.routerState.snapshot.root;
        while (route.firstChild) {

            route = route.firstChild;

        }

        return route;

    }

    constructor (
        private router: Router,
        private route: ActivatedRoute,
        private store: Store<AppState>
    ) {}

    getQueryParam (key: string): string {

        return this.route.snapshot.queryParamMap.get(key);

    }

    getQueryParams (snapshot?: ActivatedRouteSnapshot): Record<string, any> {

        snapshot = snapshot || this.route.snapshot;

        const params: Record<string, any> = {};

        snapshot.queryParamMap.keys.forEach((key: string) => {

            if (key.match(/\[]/)) {

                params[key] = snapshot.queryParamMap.getAll(key);

            } else {

                params[key] = snapshot.queryParamMap.get(key);

            }

        });

        return params;

    }

    getRouteParam (key: string): string {

        return this.childRoute.paramMap.get(key);

    }

    getRouteParams (): Record<string, string> {

        const params: Record<string, string> = {};
        this.childRoute.paramMap.keys.forEach((key: string) => {

            params[key] = this.childRoute.paramMap.get(key);

        });

        return params;

    }

    init () {

        this.start$.subscribe(() => {

            // connect to ngrx
            this.store.dispatch(routingActions.start());

        });

        this.success$.subscribe(({ urlAfterRedirects }: NavigationEnd) => {

            if (!this.reloading) {

                this.history = [
                    ...this.history,
                    {
                        name: this.childRoute.data.name,
                        url: urlAfterRedirects
                    }
                ];

                // connect to ngrx
                this.store.dispatch(routingActions.success({
                    currentRoute: this.childRoute,
                    history: this.history,
                    name: this.currentName,
                    params: this.routeParams,
                    queryParams: this.queryParams,
                    url: urlAfterRedirects
                }));

            } else {

                // connect to ngrx
                this.store.dispatch(routingActions.reload());

            }

        });

    }

    reload () {

        this.reloading = true;
        this.router.onSameUrlNavigation = 'reload';
        this.toUrl(this.currentUrl).then(() => {

            this.reloading = false;
            this.router.onSameUrlNavigation = 'ignore';

        });

    }

    removeQueryParams (params?: string[]): Promise<boolean> {

        if (params) {

            const queryParamsToRemove: Record<string, string> = {};

            params.forEach((param: string) => {

                queryParamsToRemove[param] = null;

            });

            return this.updateQueryParams(queryParamsToRemove);

        } else {

            return this.router.navigate([], { queryParams: {}, relativeTo: this.route });

        }

    }

    toRoute (commands: any[], extras: NavigationExtras = {}): Promise<boolean> {

        return this.router.navigate(commands, extras);

    }

    toUrl (url: string, extras?: NavigationExtras): Promise<boolean> {

        const destination = !extras ? url : this.router.createUrlTree([url], extras);
        return this.router.navigateByUrl(destination);

    }

    updateQueryParams (queryParams: Record<string, any>): Promise<boolean> {

        return this.router.navigate([], { queryParams, queryParamsHandling: 'merge', relativeTo: this.route });

    }

}
