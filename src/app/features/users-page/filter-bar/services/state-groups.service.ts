import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StateGroupsService {

    filterState = (opt: string[], value: string): string[] => {

        const filterValue = value.toLowerCase();

        return opt.filter((item) => item.toLowerCase().includes(filterValue));

    };

}
