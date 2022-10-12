import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HomeModule } from './home-page/home.module';
import { ProfileModule } from './profile/profile.module';
import { UsersModule } from './users-page/users.module';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        HomeModule,
        ProfileModule,
        UsersModule
    ]
})
export class FeaturesModule {
}
