import { of, Observable } from 'rxjs';
import { AuthUser } from '../models/auth-user.model';

const authKey = '__auth__';


export class AuthHelper {
    public static getLoggedInUser(): Observable<AuthUser | undefined> {
        const authUser = sessionStorage.getItem(authKey)
        if (authUser) {
            return of(JSON.parse(authUser));
        }
        return of(undefined);
    }

    public static setLoggedInUser(authUser: AuthUser): void {
        sessionStorage.setItem(authKey, JSON.stringify(authUser))
    }
}