import { NgModule } from '@angular/core';
import { LayoutModule } from '@core/layout/layout.module';
import { HomePageComponent } from './home-page';
import { ProfileModule } from './profile/profile.module';
import { UsersPageComponent } from '@features/users-page/users-page.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducer } from '@features/users-page/store/users.reducers';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from '@features/users-page/store/users.effects';
import { CommonModule } from '@angular/common';

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
        LayoutModule,
        ProfileModule,
        RouterModule,
        HttpClientModule,
        EffectsModule.forFeature([UsersEffects]),
        StoreModule.forFeature('users', reducer),
        CommonModule
    ]
})
export class FeaturesModule {
}
