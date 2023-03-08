import { createReducer, on } from '@ngrx/store';
import { Player } from 'src/app/models/player.model';
import { StateSlice } from '../../../models/state-slice.model';
import { getPlayers, getPlayersSuccess, getPlayersFail } from '../actions/get-players.actions';
export type GetPlayersState = StateSlice<Player[] | null>;

const initialState: GetPlayersState = {
    data: null,
    loading: false,
    loaded: false,
    error: null,
}

export const getPlayersReducer = createReducer(
    initialState,
    on(
        getPlayers,
        (): GetPlayersState => ({
            ...initialState,
            loading: true,
        })
    ),
    on(
        getPlayersSuccess,
        (_state, action): GetPlayersState => ({
            ...initialState,
            data: action.payload,
            loaded: true
        })
    ),
    on(
        getPlayersFail,
        (state): GetPlayersState => ({
            ...state,
            loading: false,
            loaded: false,
            error: true
        })
    )
)