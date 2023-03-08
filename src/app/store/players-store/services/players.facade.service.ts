import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { getPlayers } from '../actions/get-players.actions';
import { selectPlayers, selectPlayersDataList, selectPlayer, selectPlayerTransactions, selectPlayerTransactionsDataList } from '../selectors/players.selector';
import { getPlayer } from '../actions/get-player.actions';
import { getTransactions } from '../actions/get-transactions.actions';


@Injectable({
    providedIn: 'root'
})
export class PlayersFacade {
    public player$ = this.store.select(selectPlayer);
    public players$ = this.store.select(selectPlayers);
    public playersDataList$ = this.store.select(selectPlayersDataList);

    public playerTransactions$ = this.store.select(selectPlayerTransactions);
    public playerTransactionsDataList$ = this.store.select(selectPlayerTransactionsDataList);

    public getPlayers(): void {
        this.store.dispatch(getPlayers());
    }

    public getPlayer(id: number): void {
        this.store.dispatch(getPlayer({
            payload: {
                id
            }
        }));
    }

    public getPlayerTransactions(playerId: number): void {
        this.store.dispatch(getTransactions({
            payload: {
                playerId
            }
        }))
    }

    constructor(
        private store: Store
    ) {}
}