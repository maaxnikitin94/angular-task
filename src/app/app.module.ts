import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@core/core.module';
import { FeaturesModule } from '@features/features.module';
import { ErrorInterceptor } from '@features/notification/services/error.interceptor';
import { AppComponent } from './app.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent
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
        }
    ]
})
export class AppModule {
}
