import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { SnackBarNotificationService } from '../shared/services/snack-bar-notification.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
    form = new FormGroup({});
    model = { email: 'lalo@email.com', password: 'lalo' };
    fields: FormlyFieldConfig[] = [
        {
            key: 'email',
            type: 'input',
            templateOptions: {
                label: 'Email address',
                placeholder: 'Enter email',
                required: true,
                type: 'email'
            }
        },
        {
            key: 'password',
            type: 'input',
            templateOptions: {
                label: 'Password',
                placeholder: 'Enter password',
                required: true,
                type: 'password'
            }
        }
    ];

    constructor(private snackBarNotifService: SnackBarNotificationService,
                private router: Router) {
    }

    ngOnInit(): void {
    }

    onSubmit() {
        if (this.model.email !== 'lalo@email.com' || this.model.password !== 'lalo') {
            this.snackBarNotifService.openSnackBarNotification('Invalid credentials. Try again');
            return;
        }
        console.log(this.model);
        this.router.navigateByUrl('/home');
    }

}
