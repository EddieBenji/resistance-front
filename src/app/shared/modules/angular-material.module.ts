import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatGridListModule
    ],
    exports: [
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatGridListModule
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
