import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { from, mapTo, Observable, of, switchMap } from 'rxjs';
import { AuthHelper } from './helpers/auth.helper';

@Injectable({
  providedIn: 'root',
})
export class NonauthGuard implements CanActivate {
  constructor(private router: Router) {}

  public canActivate(): Observable<boolean> | boolean {
    return AuthHelper.getLoggedInUser().pipe(
      switchMap((loggedInUser) => {
        if (!loggedInUser) {
          return of(true);
        } else {
          return from(this.router.navigate(['/players'])).pipe(mapTo(false));
        }
      })
    );
  }
}
