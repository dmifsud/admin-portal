import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { PlayersBackendService } from '../services/players.backend.service';
import { getPlayers, getPlayersFail, getPlayersSuccess } from '../actions/get-players.actions';
import { catchError, map, mergeMap, of } from 'rxjs';


@Injectable()
export class PlayersEffects {
    public getPlayersEffect$ = createEffect(
        (): Actions =>
        this.actions$.pipe(
            ofType(getPlayers),
            mergeMap(() => 
                this.playersBackendService.getPlayers().pipe(
                    map((players) => 
                        getPlayersSuccess({
                            payload: players
                        })
                    ),
                    catchError((e) => {
                        // TODO: improve by having an error handler service
                        console.error(e);
                        return of(getPlayersFail());
                    })
                )
            )
        )
    )


    constructor(
        private actions$: Actions,
        private playersBackendService: PlayersBackendService,
        private store: Store
    ) {}
}