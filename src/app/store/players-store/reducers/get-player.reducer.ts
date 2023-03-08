import { createReducer, on } from '@ngrx/store';
import { Player } from 'src/app/models/player.model';
import { StateSlice } from '../../../models/state-slice.model';
import { getPlayer, getPlayerSuccess, getPlayerFail } from '../actions/get-player.actions';
import { getPlayers, getPlayersSuccess, getPlayersFail } from '../actions/get-players.actions';
export type GetPlayerState = StateSlice<Player | null>;

const initialState: GetPlayerState = {
    data: null,
    loading: false,
    loaded: false,
    error: null,
}

export const getPlayerReducer = createReducer(
    initialState,
    on(
        getPlayer,
        (): GetPlayerState => ({
            ...initialState,
            loading: true,
        })
    ),
    on(
        getPlayerSuccess,
        (_state, action): GetPlayerState => ({
            ...initialState,
            data: action.payload,
            loaded: true
        })
    ),
    on(
        getPlayerFail,
        (state): GetPlayerState => ({
            ...state,
            loading: false,
            loaded: false,
            error: true
        })
    )
)