import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatGridListModule,
        MatListModule,
        MatDialogModule
    ],
    exports: [
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatGridListModule,
        MatListModule,
        MatDialogModule
    ],
    providers: [
        {
            provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
            useValue: { duration: 2500, horizontalPosition: 'right', verticalPosition: 'top', direction: 'ltr' }
        }
    ]
})
export class AngularMaterialModule {
}
