import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { genderOptions } from './data-for-filters/gender-options';
import { GenderModel } from './interfaces/gender-model';
import { StateGroupsService } from '@features/users-page/filter-bar/services/state-groups.service';
import { Observable } from 'rxjs';
import { StateGroup } from '@features/users-page/filter-bar/interfaces/state-group';

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

    constructor (private stateGroupsService: StateGroupsService) {
    }

    genderTrackBy = (index: number, item: GenderModel) => item;

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
