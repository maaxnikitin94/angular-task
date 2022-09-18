import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@core/layout/layout.module';
import { FilterBarComponent } from '@features/filter-bar/filter-bar.component';
import { UsersEffects } from '@features/users-page/store/users.effects';
import { reducer } from '@features/users-page/store/users.reducers';
import { UsersPageComponent } from '@features/users-page/users-page.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HomePageComponent } from './home-page';
import { ProfileModule } from './profile/profile.module';

@NgModule({
    declarations: [
        FilterBarComponent,
        HomePageComponent,
        UsersPageComponent
    ],
    exports: [
        HomePageComponent,
        UsersPageComponent
    ],
    imports: [
        BrowserAnimationsModule,
        CommonModule,
        EffectsModule.forFeature([UsersEffects]),
        FormsModule,
        HttpClientModule,
        LayoutModule,
        MatAutocompleteModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        ProfileModule,
        ReactiveFormsModule,
        RouterModule,
        StoreModule.forFeature('users', reducer)
    ]
})
export class FeaturesModule {
}
