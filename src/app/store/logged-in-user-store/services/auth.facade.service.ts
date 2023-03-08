import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { logout } from '../actions/logout.actions';
import { selectLoggedInUser } from '../selectors/get-logged-in-user.selector';
import { getLoggedInUser, hydrateCredentials } from '../actions/get-logged-in-user.actions';

@Injectable({
    providedIn: 'root'
})
export class AuthFacade {

    public loggedInUser$ = this.store.select(selectLoggedInUser);

    public logout(): void {
        this.store.dispatch(logout());
    }

    public login(username: string, password: string): void {
        this.store.dispatch(getLoggedInUser({
            payload: {
                username,
                password
            }
        }));
    }

    public hydrate(): void {
        this.store.dispatch(hydrateCredentials());
    }

    constructor(
        private store: Store
    ) {}
}