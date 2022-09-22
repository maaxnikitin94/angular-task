import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilterBarModule } from '@features/users-page/filter-bar/filter-bar.module';
import { UsersEffects } from '@features/users-page/store/users.effects';
import { reducer } from '@features/users-page/store/users.reducers';
import { UsersPageComponent } from '@features/users-page/users-page.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

@NgModule({
    declarations: [
        UsersPageComponent
    ],
    exports: [
        UsersPageComponent
    ],
    imports: [
        CommonModule,
        EffectsModule.forFeature([UsersEffects]),
        FilterBarModule,
        RouterModule,
        StoreModule.forFeature('users', reducer)
    ]
})
export class UsersModule {
}
