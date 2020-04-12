import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPlayersDialogComponent } from './add-players-dialog/add-players-dialog.component';

@Component({
    selector: 'app-choose-game',
    templateUrl: './choose-game.component.html',
    styleUrls: [ './choose-game.component.scss' ]
})
export class ChooseGameComponent implements OnInit {

    constructor(private dialog: MatDialog) {
    }

    ngOnInit(): void {
    }

    onCreateGame() {
        this.dialog.open(AddPlayersDialogComponent);
    }

}
