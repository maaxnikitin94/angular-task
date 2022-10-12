import { Injectable } from '@angular/core';
import { IUsers } from '@features/users-page/interfaces/users';
import { UsersFilter } from '../interfaces/users-filter';

@Injectable({
    providedIn: 'root'
})

export class UsersFilterService {

    filterUsers (users: IUsers[], filters: UsersFilter[]) {

        return users.filter((user) =>
            filters.reduce(
                (acc, filter) =>
                    acc && this.selectedFilters(user, filter),
                true
            ));

    };

    private selectedFilters (user: IUsers, { type, value }: UsersFilter) {

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

}
