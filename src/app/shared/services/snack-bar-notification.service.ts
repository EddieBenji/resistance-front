import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class SnackBarNotificationService {

    constructor(private snackBar: MatSnackBar) {
    }

    openSnackBarNotification(message: string, action = 'Close') {
        this.snackBar.open(message, action);
    }
}
