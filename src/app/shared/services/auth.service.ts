import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs';
import { AuthUser } from '../../models/auth-user.model';
import { AuthHelper } from '../../helpers/auth.helper';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
    private router: Router) {}

  login(username: string, password: string): Observable<AuthUser> {
    return this.http.post<AuthUser>('http://localhost:3000/login', {
      username,
      password
    }).pipe(tap((data) => {
      AuthHelper.setLoggedInUser(data);
    }));;

    /*
      dmifsud: test
      aseychell: test1
      kspiteri: test2
    */
  }

  logout(): void {
    AuthHelper.clearSession();
    void this.router.navigate(['login']);
  }
}
