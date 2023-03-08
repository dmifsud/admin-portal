import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { getPlayers } from '../actions/get-players.actions';
import { selectPlayers, selectPlayersDataList, selectPlayer } from '../selectors/players.selector';
import { getPlayer } from '../actions/get-player.actions';


@Injectable({
    providedIn: 'root'
})
export class PlayersFacade {
    public player$ = this.store.select(selectPlayer);
    public players$ = this.store.select(selectPlayers);
    public playersDataList$ = this.store.select(selectPlayersDataList);

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

    constructor(
        private store: Store
    ) {}
}