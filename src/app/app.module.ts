import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@core/core.module';
import { ErrorInterceptor } from '@core/interceptors/error.interceptor';
import { FeaturesModule } from '@features/features.module';
import { AppComponent } from './app.component';
import { NotificationComponent } from './libs/notification/components/notification.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent,
        NotificationComponent
    ],
    imports: [
        BrowserModule,
        CoreModule,
        FeaturesModule,
        MatFormFieldModule
    ],
    providers: [
        {
            multi: true,
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorInterceptor
        },
        {
            provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
            useClass: NotificationComponent,
            useValue: { duration: 0 }
        }
    ]
})
export class AppModule {
}
