import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationComponent } from '@features/notification/components/notification.component';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    constructor (private _snackBar: MatSnackBar) {
    }

    error (message: string, duration: number) {

        this._snackBar.openFromComponent(NotificationComponent, {
            data: message,
            duration,
            panelClass: 'snack-style-red',
            verticalPosition: 'top'
        });

    }

    showNotification (message: string, duration: number, color?: 'red' | 'green' | 'yellow') {

        this._snackBar.openFromComponent(NotificationComponent, {
            data: message,
            duration,
            panelClass: ['snack-style-green', `snack-style-${color}`],
            verticalPosition: 'top'
        });

    }

}
