import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterBarComponent } from '../filter-bar/filter-bar.component';

@NgModule({
    declarations: [
        FilterBarComponent
    ],
    exports: [
        FilterBarComponent
    ],
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        MatAutocompleteModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatSelectModule,
        ReactiveFormsModule
    ]
})
export class FilterBarModule {
}
