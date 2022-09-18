import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FilterModel } from '@features/filter-bar/interfaces/filter-model';
import { IUsers } from '@features/users-page/interfaces/users';
import { getUsersPending } from '@features/users-page/store/users.actions';
import { getUsersFromState } from '@features/users-page/store/users.selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'crx-users-page',
    styleUrls: ['./users-page.component.scss'],
    templateUrl: './users-page.component.html'
})

export class UsersPageComponent implements OnInit {

    @Input() filters: any;

    public filterIsOpen = false;
    public users$: Observable<IUsers[]>;

    constructor (private store: Store) {

        this.store.dispatch(getUsersPending());

    }

    ngOnInit () {

        this.users$ = this.store.select(getUsersFromState);

    }

    openFilter () {

        return this.filterIsOpen = !this.filterIsOpen;

    }

    applyFilters (event: FilterModel) {

        if (event.byGender) {

            this.users$ = this.users$.pipe(map((users) =>
                users?.filter((user) => user.gender === event.byGender)));

        } else if (event.byState) {

            this.users$ = this.users$.pipe(map((users) =>
                users?.filter((user) => user.state === event.byState)));

        } else if (event.byDate.value.start && event.byDate.touched) {

            const end: any = new Date(event.byDate.value.end).getTime();
            const start: any = new Date(event.byDate.value.start).getTime();
            this.users$ = this.store.select(getUsersFromState).pipe(map((users) =>
                users?.filter((user) => {

                    const userDate = new Date(user.dateOfBirth).getTime();
                    return userDate > start && userDate < end;

                })));

        } else {

            this.users$ = this.store.select(getUsersFromState);

        }

    }

}
