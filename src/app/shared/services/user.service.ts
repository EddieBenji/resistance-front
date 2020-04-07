import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';

import { User } from '../models/user.interface';
import { AppConstants } from '../constants/app.constants';

@Injectable({
    providedIn: 'root'
})
export class UserService extends EntityCollectionServiceBase<User> {

    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super(AppConstants.USER_MODEL_NAME, serviceElementsFactory);
    }
}
