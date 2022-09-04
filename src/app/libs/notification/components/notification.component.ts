import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'crx-notification',
    styleUrls: ['./notification.component.scss'],
    template: `
        <div>
            {{data}}
        </div>
    `
})
export class NotificationComponent {

    constructor (
        @Inject(MAT_SNACK_BAR_DATA)
        public data: string,
        public snackBarRef: MatSnackBarRef<NotificationComponent>
    ) {
    }

}
