import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
        BrowserAnimationsModule,
        CommonModule,
        EffectsModule.forFeature([UsersEffects]),
        HttpClientModule,
        LayoutModule,
        MatIconModule,
        MatSnackBarModule,
        ProfileModule,
        RouterModule,
        StoreModule.forFeature('users', reducer)
    ]
})
export class FeaturesModule {
}
