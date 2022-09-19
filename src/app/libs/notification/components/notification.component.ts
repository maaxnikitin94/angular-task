import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    selector: 'crx-notification',
    styleUrls: ['./notification.component.scss'],
    template: `{{data}}`
})
export class NotificationComponent {

    constructor (
        @Inject(MAT_SNACK_BAR_DATA)
        public data: string,
        public snackBarRef: MatSnackBarRef<NotificationComponent>
    ) {
    }

}
