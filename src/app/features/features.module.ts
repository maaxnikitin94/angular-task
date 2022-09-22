import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { UsersModule } from '@features/users-page/users.module';
import { ProfileModule } from './profile/profile.module';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        ProfileModule,
        UsersModule
    ]
})
export class FeaturesModule {
}
