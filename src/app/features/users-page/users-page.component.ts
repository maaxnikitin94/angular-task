import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IUsers } from '@features/users-page/interfaces/users';
import { getUsersPending } from '@features/users-page/store/users.actions';
import { getUsersFromState } from '@features/users-page/store/users.selectors';
import { Store } from '@ngrx/store';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CompareFilters } from '@features/users-page/filter-bar/interfaces/compare-filters';

function compareUserFilter (user: IUsers, { type, value }: CompareFilters) {

    switch (type) {

        case 'state':
            return user.state === value;
        case 'gender':
            return user.gender === value;
        case 'dateStart':
            return new Date(user.dateOfBirth).getTime() > new Date(value).getTime();
        case 'dateEnd':
            return new Date(user.dateOfBirth).getTime() < new Date(value).getTime();

    }

    return false;

}

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'crx-users-page',
    styleUrls: ['./users-page.component.scss'],
    templateUrl: './users-page.component.html'
})

export class UsersPageComponent {

    private filters$ = new BehaviorSubject<CompareFilters[]>([]);
    public filterIsOpen = false;
    public users$: Observable<IUsers[]> = combineLatest([
        this.store.select(getUsersFromState),
        this.filters$
    ]).pipe(map(([users, filters]) => filters.length ? users.filter((user) =>
        filters.reduce((acc, filter) => acc && compareUserFilter(user, filter), true)) : users));

    constructor (private store: Store) {

        this.store.dispatch(getUsersPending());

    }

    openFilter () {

        return this.filterIsOpen = !this.filterIsOpen;

    }

    applyFilters (value: CompareFilters[]) {

        this.filters$.next(value);

    }

}
