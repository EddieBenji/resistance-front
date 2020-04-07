import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/models/user.interface';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {

    constructor(private userService: UserService) {
    }

    ngOnInit(): void {
    }

    onCreateGame() {
        const user: User = {
            id: 1,
            username: 'Lalo',
            password: 'lalo123',
            email: 'email@lalo.com',
            dateLoaded: new Date()
        };
        this.userService.add(user);
    }

}
