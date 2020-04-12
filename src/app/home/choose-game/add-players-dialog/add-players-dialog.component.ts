import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-players-dialog',
    templateUrl: './add-players-dialog.component.html',
    styleUrls: [ './add-players-dialog.component.scss' ]
})
export class AddPlayersDialogComponent implements OnInit {
    formGroup: FormGroup;

    constructor(public dialogRef: MatDialogRef<AddPlayersDialogComponent>,
                private router: Router) {
    }

    ngOnInit(): void {
        this.formGroup = new FormGroup({
            players: new FormArray([
                new FormGroup({
                    username: new FormControl(null, [ Validators.required ])
                })

            ])
        });
    }


    get playersControls() {
        return this.playersFormArray.controls;
    }

    get playersFormArray(): FormArray {
        return this.formGroup.get('players') as FormArray;
    }

    onAddPlayer() {
        this.playersFormArray.push(
            new FormGroup({
                username: new FormControl(null, [ Validators.required ])
            })
        );
    }

    onRemoveGroup(index: number) {
        this.playersFormArray.removeAt(index);
    }

    onSubmitPlayers() {
        console.log(this.playersFormArray.value);
        this.dialogRef.close();
        this.router.navigate([ '/game', '1', 'resistance-panel' ]);
    }

}
