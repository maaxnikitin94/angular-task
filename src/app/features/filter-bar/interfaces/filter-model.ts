import { FormGroup } from '@angular/forms';

export interface FilterModel {
    byDate: FormGroup;
    byGender: string;
    byState: string;
}
