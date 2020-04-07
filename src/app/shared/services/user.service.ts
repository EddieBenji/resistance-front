import { Injectable } from '@angular/core';
import {
    DefaultDataService,
    EntityCollectionServiceBase,
    EntityCollectionServiceElementsFactory,
    HttpUrlGenerator,
    Logger,
    QueryParams
} from '@ngrx/data';

import { User } from '../models/user.interface';
import { AppConstants } from '../constants/app.constants';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService extends EntityCollectionServiceBase<User> {

    // constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator, logger: Logger) {
    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        // this.entityUrl = 'https://oscar-domain.com:4000/api/v1/user';
        // this.entitiesUrl = 'https://oscar-domain.com:4000/api/v1/users';
        // super(AppConstants.USER_MODEL_NAME, http, httpUrlGenerator);
        super(AppConstants.USER_MODEL_NAME, serviceElementsFactory);
        // logger.log(`Created custom ${AppConstants.USER_MODEL_NAME} EntityDataService`);
    }

    // getAll(): Observable<User[]> {
    //     // super.httpUrlGenerator.
    //     return super.getAll().pipe(map(users => users.map(user => this.mapUser(user))));
    // }

    // getById(id: string | number): Observable<User> {
    //     return super.getById(id).pipe(map(user => this.mapUser(user)));
    // }
    //
    // getWithQuery(params: string | QueryParams): Observable<User[]> {
    //     return super.getWithQuery(params).pipe(
    //         map(users => users.map(user => this.mapUser(user)))
    //     );
    // }
    //
    // private mapUser(user: User) {
    //     return {
    //         ...user,
    //         dateLoaded: new Date()
    //     };
    // }
}
