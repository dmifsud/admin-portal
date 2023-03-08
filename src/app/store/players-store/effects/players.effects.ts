import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { PlayersBackendService } from '../services/players.backend.service';
import { getPlayers, getPlayersFail, getPlayersSuccess } from '../actions/get-players.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { getPlayer, getPlayerSuccess, getPlayerFail } from '../actions/get-player.actions';
import { getTransactions, getTransactionsSuccess, getTransactionsFail } from '../actions/get-transactions.actions';


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
    );

    public getPlayerEffect$ = createEffect(
        (): Actions =>
        this.actions$.pipe(
            ofType(getPlayer),
            mergeMap(({payload}) => 
                this.playersBackendService.getPlayer(payload.id).pipe(
                    map((player) => 
                        getPlayerSuccess({
                            payload: player
                        })
                    ),
                    catchError((e) => {
                        // TODO: improve by having an error handler service
                        console.error(e);
                        return of(getPlayerFail());
                    })
                )
            )
        )
    );

    public getTransactionsEffect$ = createEffect(
        (): Actions =>
        this.actions$.pipe(
            ofType(getTransactions),
            mergeMap(({ payload }) => 
                this.playersBackendService.getTransactions(payload.playerId).pipe(
                    map((transactions) => 
                        getTransactionsSuccess({
                            payload: transactions
                        })
                    ),
                    catchError((e) => {
                        // TODO: improve by having an error handler service
                        console.error(e);
                        return of(getTransactionsFail());
                    })
                )
            )
        )
    );


    constructor(
        private actions$: Actions,
        private playersBackendService: PlayersBackendService,
        private store: Store
    ) {}
}