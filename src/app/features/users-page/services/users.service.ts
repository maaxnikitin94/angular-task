import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from '@features/profile/interfaces/profile';
import { UserFromApiResponse } from '@features/users-page/interfaces/user-from-api-response';
import { User } from '@features/users-page/interfaces/users';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    constructor (private httpClient: HttpClient) {
    }

    getUsers (): Observable<User[]> {

        return this.httpClient
        .get('https://randomuser.me/api/?results=10&exc=gender,login,registered,nat&noinfo&seed=foobar')
        .pipe(map(({ results }: UserFromApiResponse): User[] => results.map((user) => ({
            cellNumber: user.cell,
            city: user.location.city,
            dateOfBirth: user.dob.date,
            email: user.email,
            firstName: user.name.first,
            id: user.id.name,
            lastName: user.name.last,
            phoneNumber: user.phone,
            picture: user.picture.medium,
            state: user.location.state
        }))));

    }

    getUser (id: string = ''): Observable<Profile> {

        return this.httpClient
        .get('https://randomuser.me/api/?results=1&exc=gender,login,registered,nat&noinfo&seed=foobar&' + id)
        .pipe(map(({ results }: UserFromApiResponse): Profile => results[0]));

    }

}
