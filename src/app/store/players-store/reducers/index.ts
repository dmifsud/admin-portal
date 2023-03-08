import { ActionReducerMap } from '@ngrx/store';
import { GetPlayersState, getPlayersReducer } from './get-players.reducer';
import { GetPlayerState, getPlayerReducer } from './get-player.reducer';
import { GetPlayerTransactionsState, getPlayerTransactionsReducer } from './get-player-transactions.reducer';
export interface PlayersState {
    getPlayers: GetPlayersState,
    getPlayer: GetPlayerState,
    getPlayerTransactions: GetPlayerTransactionsState,
}

export const playersReducers: ActionReducerMap<PlayersState, any> = {
    getPlayers: getPlayersReducer,
    getPlayer: getPlayerReducer,
    getPlayerTransactions: getPlayerTransactionsReducer
}