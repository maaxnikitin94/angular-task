import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterBarComponent } from '@features/users-page/filter-bar/filter-bar.component';
import { MatSelectModule } from '@angular/material/select';

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
        MatNativeDateModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatSelectModule
    ]
})
export class FilterBarModule {
}
