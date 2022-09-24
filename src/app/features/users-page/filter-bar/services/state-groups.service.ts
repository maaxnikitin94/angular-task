import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { StateGroup } from '@features/users-page/filter-bar/interfaces/state-group';

@Injectable({
    providedIn: 'root'
})
export class StateGroupsService {

    constructor (private httpClient: HttpClient) {
    }

    getStates (value?: string) {

        return this.httpClient
        .get('https://gist.githubusercontent.com/shawnbot/ab11ace1bafa23be290c193049a71cb5/raw/f5e9c2788d2221fe4afe1930567c2cbe60c7e77a/states-array.json')
        .pipe(map((states: StateGroup[]) => {

            if (value) {

                return states.filter((state) => state.name.toLowerCase().includes(value));

            }

            return states;

        }));

    }

}
