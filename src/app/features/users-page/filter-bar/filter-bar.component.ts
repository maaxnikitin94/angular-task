import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { genderOptions } from './data-for-filters/gender-options';
import { stateGroups } from './data-for-filters/state-groups';
import { GenderModel } from './interfaces/gender-model';
import { StateGroup } from './interfaces/state-group';
import { StateGroupsService } from './services/state-groups.service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'crx-filter-bar',
    styleUrls: ['./filter-bar.component.scss'],
    templateUrl: './filter-bar.component.html'
})

export class FilterBarComponent implements OnInit {

    @Output() apply = new EventEmitter();

    filtersForm: FormGroup = new FormGroup({
        dateEnd: new FormControl(null),
        dateStart: new FormControl(null),
        gender: new FormControl(''),
        state: new FormControl('')
    });

    genderOptions = genderOptions;
    stateGroupOptions: Observable<StateGroup[]>;
    stateGroups = stateGroups;

    constructor (private stateGroupsService: StateGroupsService) {
    }

    ngOnInit () {

        this.stateGroupOptions = this.filtersForm.get('state')!.valueChanges.pipe(
            startWith(''),
            map((value) => this.filterStateGroup(value || ''))
        );

    }

    private filterStateGroup (value: string): StateGroup[] {

        if (value) {

            return this.stateGroups
            .map((group) => ({
                letter: group.letter,
                names: this.stateGroupsService.filterState(group.names, value)
            }))
            .filter((group) => group.names.length > 0);

        }

        return this.stateGroups;

    }

    genderTrackBy = (index: number, item: GenderModel) => item;

}
