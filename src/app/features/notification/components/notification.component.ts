import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
    selector: 'crx-notification',
    styleUrls: ['./notification.component.scss'],
    templateUrl: './notification.component.html'
})
export class NotificationComponent {

    constructor (
        @Inject(MAT_SNACK_BAR_DATA)
        public data: string,
        public snackBarRef: MatSnackBarRef<NotificationComponent>
    ) {
    }

}
