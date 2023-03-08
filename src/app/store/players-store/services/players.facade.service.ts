import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { getPlayers } from '../actions/get-players.actions';
import { selectPlayers, selectPlayersDataList } from '../selectors/players.selector';


@Injectable({
    providedIn: 'root'
})
export class PlayersFacade {
    public players$ = this.store.select(selectPlayers);
    public playersDataList$ = this.store.select(selectPlayersDataList);

    public getPlayers(): void {
        this.store.dispatch(getPlayers());
    }

    constructor(
        private store: Store
    ) {}
}