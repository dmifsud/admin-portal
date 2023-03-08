import { createReducer, on } from '@ngrx/store';
import { Player } from 'src/app/models/player.model';
import { StateSlice } from '../../../models/state-slice.model';
import { getTransactions, getTransactionsSuccess, getTransactionsFail } from '../actions/get-transactions.actions';
import { Transaction } from '../../../models/transaction.model';
export type GetPlayerTransactionsState = StateSlice<Transaction[] | null>;

const initialState: GetPlayerTransactionsState = {
    data: null,
    loading: false,
    loaded: false,
    error: null,
}

export const getPlayerTransactionsReducer = createReducer(
    initialState,
    on(
        getTransactions,
        (): GetPlayerTransactionsState => ({
            ...initialState,
            loading: true,
        })
    ),
    on(
        getTransactionsSuccess,
        (_state, action): GetPlayerTransactionsState => ({
            ...initialState,
            data: action.payload,
            loaded: true
        })
    ),
    on(
        getTransactionsFail,
        (state): GetPlayerTransactionsState => ({
            ...state,
            loading: false,
            loaded: false,
            error: true
        })
    )
)