import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@core/layout/layout.module';
import { ProfileEffects } from '@features/profile/store/profile.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LoadingComponent } from '../../shared/components/loading.component';
import { ProfileDetailComponent } from './profile-detail';
import { getProfileReducer } from './store/profile.reducers';

@NgModule({
    declarations: [
        LoadingComponent,
        ProfileDetailComponent
    ],
    exports: [
        LoadingComponent,
        ProfileDetailComponent
    ],
    imports: [
        CommonModule,
        EffectsModule.forFeature([ProfileEffects]),
        LayoutModule,
        MatCardModule,
        MatDividerModule,
        MatListModule,
        StoreModule.forFeature('profile', getProfileReducer)
    ]
})
export class ProfileModule {
}
