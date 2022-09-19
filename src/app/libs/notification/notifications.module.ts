import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { ErrorInterceptor } from '@core/interceptors/error.interceptor';
import { NotificationComponent } from './components/notification.component';

@NgModule({})
export class NotificationsModule {

    static forRoot (): ModuleWithProviders<NotificationsModule> {

        return {
            ngModule: NotificationsModule,
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
        };

    }

}
