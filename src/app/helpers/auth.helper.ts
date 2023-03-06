import { of, Observable } from 'rxjs';

export interface AuthUser {
    name: string;
    surname: string;
}

export class AuthHelper {
    public static getLoggedInUser(): Observable<AuthUser | undefined> {
        return of({
            name: 'David',
            surname: 'Mifsud'
        });
    }
}