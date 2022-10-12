import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationComponent } from '../components/notification.component';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    constructor (private _snackBar: MatSnackBar) {
    }

    showError (message: string, duration: number) {

        this._snackBar.openFromComponent(NotificationComponent, {
            data: message,
            duration,
            panelClass: 'snack-style-red',
            verticalPosition: 'bottom'
        });

    }

    showNotification (message: string, color: 'red' | 'green' | 'yellow' = 'green', duration = 3000) {

        this._snackBar.openFromComponent(NotificationComponent, {
            data: message,
            duration,
            panelClass: `snack-style-${color}`,
            verticalPosition: 'bottom'
        });

    }

}
