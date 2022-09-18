import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FilterModel } from '@features/filter-bar/interfaces/filter-model';
import { ReferenceModel } from '@features/filter-bar/interfaces/reference-model';
import { StateGroup } from '@features/filter-bar/interfaces/state-group';
import { StateGroupsService } from '@features/filter-bar/services/state-groups.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'crx-filter-bar',
    styleUrls: ['./filter-bar.component.scss'],
    templateUrl: './filter-bar.component.html'
})

export class FilterBarComponent implements OnInit {

    @Output() apply = new EventEmitter();

    filters: FilterModel = {
        byDate: new FormGroup({
            end: new FormControl(null),
            start: new FormControl(null)
        }),
        byGender: '',
        byState: ''
    };

    stateForm = this.formBuilder.group({
        stateGroup: ''
    });

    stateGroupOptions: Observable<StateGroup[]>;

    constructor (private formBuilder: FormBuilder, private stateGroupsService: StateGroupsService) {
    }

    ngOnInit () {

        this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges.pipe(
            startWith(''),
            map((value) => this.filterStateGroup(value || ''))
        );

    }

    private filterStateGroup (value: string): StateGroup[] {

        if (value) {

            return this.stateGroupsService.stateGroups
            .map((group) => ({
                letter: group.letter,
                names: this.stateGroupsService.filterState(group.names, value)
            }))
            .filter((group) => group.names.length > 0);

        }

        return this.stateGroupsService.stateGroups;

    }

    public genderOptions: ReferenceModel[] = [
        { id: 'male', name: 'male' },
        { id: 'female', name: 'female' },
        { id: 'others', name: 'others' }
    ];

    genderTrackBy = (index: number, item: ReferenceModel) => item.id;

}
