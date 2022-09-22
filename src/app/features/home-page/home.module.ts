import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@core/layout/layout.module';
import { HomePageComponent } from '@features/home-page/home-page.component';

@NgModule({
    declarations: [
        HomePageComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        LayoutModule,
        RouterModule
    ]
})
export class HomeModule {
}
