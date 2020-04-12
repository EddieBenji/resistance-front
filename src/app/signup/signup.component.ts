import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { SnackBarNotificationService } from '../shared/services/snack-bar-notification.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: [ './signup.component.scss' ]
})
export class SignupComponent implements OnInit {
    form = new FormGroup({});
    model = { email: 'lalo@email.com', password: 'lalo', confirmPassword: 'lalo' };
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
        },
        {
            key: 'confirmPassword',
            type: 'input',
            templateOptions: {
                label: 'Confirm password',
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
        if (this.model.password !== this.model.confirmPassword) {
            this.snackBarNotifService.openSnackBarNotification('Password don\'t match. Try again');
            return;
        }
        console.log(this.model);
        this.router.navigateByUrl('/game');
    }

}
