import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, distinctUntilChanged, filter, map, mergeMap, of, tap, switchMap, merge } from 'rxjs';
import {
  getLoggedInUser,
  getLoggedInUserSuccess,
  getLoggedInUserFail,
} from '../actions/get-logged-in-user.actions';
import { AuthService } from '../../../shared/services/auth.service';
import { logout } from '../actions/logout.actions';
import { AuthHelper } from '../../../helpers/auth.helper';
import { Router } from '@angular/router';
import { hydrateCredentials } from '../actions/get-logged-in-user.actions';
import { AuthUser } from '../../../models/auth-user.model';

@Injectable()
export class LoggedInUserEffects {
  public getLoggedInUserEffect$ = createEffect(
    (): Actions =>
      this.actions$.pipe(
        ofType(getLoggedInUser),
        mergeMap(({ payload }) =>
          this.authService.login(payload.username, payload.password).pipe(
            map((user) => {
                console.log('success', user);
                return getLoggedInUserSuccess({
                    payload: {
                        user,
                        redirect: true
                    },
                  })
            }),
            catchError((e) => {
              // TODO: improve by having an error handler service
              console.error(e);
              return of(getLoggedInUserFail());
            })
          )
        )
      )
  );

  public getLoggedInUserSuccessEffect$ = createEffect(
    (): Actions =>
      this.actions$.pipe(
        ofType(getLoggedInUserSuccess),
        tap(({ payload }) => {
          AuthHelper.setLoggedInUser(payload.user);
          if (payload.redirect) {
              void this.router.navigate(['/players']);
          }
        })
      ), { dispatch: false }
  );

  public logoutEffect$ = createEffect(
    (): Actions =>
      this.actions$.pipe(
        ofType(logout),
        tap(() => {
            AuthHelper.clearSession();
            void this.router.navigate(['login']);
        })
      ), { dispatch: false }
  );


  public hydrateEffect$ = createEffect(
    (): Actions =>
    this.actions$.pipe(
        ofType(hydrateCredentials),
        mergeMap(
            () => 
            AuthHelper.getLoggedInUser().pipe(
                filter((user) => typeof user !== 'undefined'),
                map((user) => getLoggedInUserSuccess({ payload: {
                    user: user as AuthUser,
                    redirect: false
                } })
            ))   
        )
    )
  )

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store,
    private router: Router
  ) {}
}
