import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationComponent } from '../components/notification.component';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    constructor (private _snackBar: MatSnackBar) {
    }

    showError (message: string, duration: number = 5000) {

        this._snackBar.openFromComponent(NotificationComponent, {
            data: message,
            duration,
            panelClass: 'snack-style-red',
            verticalPosition: 'bottom'
        });

    }

    showNotification (message: string, duration: number, color: 'red' | 'green' | 'yellow' = 'green') {

        this._snackBar.openFromComponent(NotificationComponent, {
            data: message,
            duration,
            panelClass: `snack-style-${color}`,
            verticalPosition: 'bottom'
        });

    }

}
