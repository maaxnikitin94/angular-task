import { ModuleWithProviders, NgModule } from '@angular/core';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from '@angular/material/snack-bar';
import { NotificationComponent } from './components/notification.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [
        MatIconModule,
        MatSnackBarModule
    ]
})
export class NotificationsModule {

    static forRoot (): ModuleWithProviders<NotificationsModule> {

        return {
            ngModule: NotificationsModule,
            providers: [
                {
                    provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
                    useClass: NotificationComponent,
                    useValue: {}
                }
            ]
        };

    }

}
