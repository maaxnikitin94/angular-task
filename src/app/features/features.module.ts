import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@core/layout/layout.module';
import { UsersEffects } from '@features/users-page/store/users.effects';
import { reducer } from '@features/users-page/store/users.reducers';
import { UsersPageComponent } from '@features/users-page/users-page.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HomePageComponent } from './home-page';
import { ProfileModule } from './profile/profile.module';

@NgModule({
    declarations: [
        HomePageComponent,
        UsersPageComponent
    ],
    exports: [
        HomePageComponent,
        UsersPageComponent
    ],
    imports: [
        CommonModule,
        EffectsModule.forFeature([UsersEffects]),
        HttpClientModule,
        LayoutModule,
        ProfileModule,
        RouterModule,
        StoreModule.forFeature('users', reducer)
    ]
})
export class FeaturesModule {
}
