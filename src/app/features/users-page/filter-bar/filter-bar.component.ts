import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { genderOptions } from './data-for-filters/gender-options';
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

    constructor (private stateGroupsService: StateGroupsService) {
    }

    ngOnInit () {

        this.stateGroupOptions = this.filtersForm.get('state')!.valueChanges.pipe(
            startWith(''),
            map((value) => this.stateGroupsService.filterStateGroup(value || ''))
        );

    }

    genderTrackBy = (index: number, item: GenderModel) => item;

}
