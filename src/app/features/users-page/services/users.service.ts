import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProfile } from '@features/profile/interfaces/profile';
import { IUsers } from '@features/users-page/interfaces/users';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    constructor (private httpClient: HttpClient) {
    }

    getUsers () {

        return this.httpClient
        .get('https://randomuser.me/api/?results=100&exc=login,registered,nat&noinfo&seed=foobar')
        .pipe(map(({ results }: any): IUsers[] => results.map((user: any) => ({
            cellNumber: user.cell,
            city: user.location.city,
            dateOfBirth: user.dob.date,
            email: user.email,
            firstName: user.name.first,
            gender: user.gender,
            id: user.id.name,
            lastName: user.name.last,
            phoneNumber: user.phone,
            picture: user.picture.medium,
            state: user.location.state
        }))));

    }

    getProfile () {

        return this.httpClient
        .get('https://randomuser.me/api/?results=1&exc=login,registered,nat&noinfo&seed=foobar')
        .pipe(map(({ results }: any): IProfile => results[0]));

    }

}
