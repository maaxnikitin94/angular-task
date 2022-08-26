import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@core/layout/layout.module';
import { NotificationComponent } from '@features/notification/components/notification.component';
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
        UsersPageComponent,
        NotificationComponent
    ],
    exports: [
        HomePageComponent,
        UsersPageComponent,
        NotificationComponent
    ],
    imports: [
        BrowserAnimationsModule,
        LayoutModule,
        ProfileModule,
        RouterModule,
        HttpClientModule,
        EffectsModule.forFeature([UsersEffects]),
        StoreModule.forFeature('users', reducer),
        CommonModule,
        MatSnackBarModule,
        MatIconModule
    ],
    providers: [
        { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useClass: NotificationComponent, useValue: { duration: 0 } }
    ]
})
export class FeaturesModule {
}
