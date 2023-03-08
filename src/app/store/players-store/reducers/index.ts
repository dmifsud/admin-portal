import { ActionReducerMap } from '@ngrx/store';
import { GetPlayersState, getPlayersReducer } from './get-players.reducer';
import { GetPlayerState, getPlayerReducer } from './get-player.reducer';
export interface PlayersState {
    getPlayers: GetPlayersState,
    getPlayer: GetPlayerState,
}

export const playersReducers: ActionReducerMap<PlayersState, any> = {
    getPlayers: getPlayersReducer,
    getPlayer: getPlayerReducer
}