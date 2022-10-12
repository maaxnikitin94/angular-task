import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StateGroup } from '../interfaces/state-group';

@Injectable({
    providedIn: 'root'
})

export class StateGroupsService {

    constructor (private httpClient: HttpClient) {
    }

    getStates (value?: string): Observable<StateGroup[]> {

        return this.httpClient
        .get('https://gist.githubusercontent.com/shawnbot/ab11ace1bafa23be290c193049a71cb5/raw/f5e9c2788d2221fe4afe1930567c2cbe60c7e77a/states-array.json')
        .pipe(map((states: StateGroup[]) => states.filter((state) => !value || state.name.toLowerCase().includes(value))));

    }

}
