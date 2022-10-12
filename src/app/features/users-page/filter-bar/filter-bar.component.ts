import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { StateGroup } from '../filter-bar/interfaces/state-group';
import { StateGroupsService } from '../filter-bar/services/state-groups.service';
import { GENDER_OPTIONS } from './data-for-filters/gender-options';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'crx-filter-bar',
    styleUrls: ['./filter-bar.component.scss'],
    templateUrl: './filter-bar.component.html'
})

export class FilterBarComponent implements OnInit {

    @Output() apply = new EventEmitter();
    genderOptions = GENDER_OPTIONS;
    stateGroupOptions: Observable<StateGroup[]>;

    filtersForm: FormGroup = new FormGroup({
        dateEnd: new FormControl(null),
        dateStart: new FormControl(null),
        gender: new FormControl(''),
        state: new FormControl('')
    });

    constructor (private stateGroupsService: StateGroupsService) {
    }

    ngOnInit () {

        this.stateGroupOptions = this.stateGroupsService.getStates();
        this.filtersForm.get('state').valueChanges.subscribe((value) => {

            this.stateGroupOptions = this.stateGroupsService.getStates(value);

        });

    }

    clickApply () {

        const filters = Object.entries(this.filtersForm.getRawValue())
        .filter(([type, value]) => !!value)
        .map(([type, value]) => ({ type, value }));
        this.apply.emit(filters);

    }

}
