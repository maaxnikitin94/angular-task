import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsersFilterService } from '../users-page/filter-bar/services/users-filter.service';
import { IUsers } from '../users-page/interfaces/users';
import { getUsersPending } from '../users-page/store/users.actions';
import { getUsersFromState } from '../users-page/store/users.selectors';
import { UsersFilter } from './filter-bar/interfaces/users-filter';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'crx-users-page',
    styleUrls: ['./users-page.component.scss'],
    templateUrl: './users-page.component.html'
})

export class UsersPageComponent implements OnInit {

    private filters$ = new BehaviorSubject<UsersFilter[]>([]);
    public filterIsOpen = false;
    public users$: Observable<IUsers[]>;

    constructor (private store: Store, private filterService: UsersFilterService) {

        this.store.dispatch(getUsersPending());

    }

    ngOnInit () {

        this.users$ = combineLatest([
            this.store.select(getUsersFromState),
            this.filters$
        ]).pipe(map(([users, filters]) =>
            filters.length ? this.filterService.filterUsers(users, filters) : users));

    }

    openFilter () {

        return this.filterIsOpen = !this.filterIsOpen;

    }

    applyFilters (value: UsersFilter[]) {

        this.filters$.next(value);

    }

}
