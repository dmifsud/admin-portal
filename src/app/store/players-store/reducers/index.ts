import { ActionReducerMap } from '@ngrx/store';
import { GetPlayersState, getPlayersReducer } from './get-players.reducer';
export interface PlayersState {
    getPlayers: GetPlayersState
}

export const playersReducers: ActionReducerMap<PlayersState, any> = {
    getPlayers: getPlayersReducer
}