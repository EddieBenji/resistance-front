import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/models/user.interface';

@Component({
    selector: 'app-choose-game',
    templateUrl: './choose-game.component.html',
    styleUrls: [ './choose-game.component.scss' ]
})
export class ChooseGameComponent implements OnInit {

    constructor(private userService: UserService) {
    }

    ngOnInit(): void {
    }

    onCreateGame() {
        // const user: User = {
        //     id: 1,
        //     username: 'Lalo',
        //     password: 'lalo123',
        //     email: 'email@lalo.com',
        //     dateLoaded: new Date()
        // };
        // this.userService.add(user);
    }

}
