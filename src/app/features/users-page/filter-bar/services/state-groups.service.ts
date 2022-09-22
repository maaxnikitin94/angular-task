import { Injectable } from '@angular/core';
import { StateGroup } from '@features/users-page/filter-bar/interfaces/state-group';
import { stateGroups } from '@features/users-page/filter-bar/data-for-filters/state-groups';

@Injectable({
    providedIn: 'root'
})
export class StateGroupsService {

    stateGroups = stateGroups;

    filterState = (opt: string[], value: string): string[] => {

        const filterValue = value.toLowerCase();

        return opt.filter((item) => item.toLowerCase().includes(filterValue));

    };

    filterStateGroup (value: string): StateGroup[] {

        if (value) {

            return this.stateGroups
            .map((group) => ({
                letter: group.letter,
                names: this.filterState(group.names, value)
            }))
            .filter((group) => group.names.length > 0);

        }

        return this.stateGroups;

    }

}
