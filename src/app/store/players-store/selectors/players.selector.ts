import { MatTableDataSource } from '@angular/material/table';
import { createSelector } from '@ngrx/store';
import { Player } from 'src/app/models/player.model';
import { selectPlayerFeature } from './player-state.selector';
import { CurrencyFormatPipe } from '../../../shared/pipes/currency-format.pipe';
import { Transaction } from '../../../models/transaction.model';

export const selectPlayer = createSelector(
    selectPlayerFeature,
    (state) => state.getPlayer
)

export const selectPlayers = createSelector(
    selectPlayerFeature,
    (state) => state.getPlayers
);

export const selectPlayersDataList = createSelector(
    selectPlayers,
    (state) => {
        const currencyFormat = new CurrencyFormatPipe();
        
        return ((state?.data ?? []) as Player[]).map((player) => ({
            ...player,
            balance: currencyFormat.transform(player.balance) 
        } as Player))
    }
);


export const selectPlayerTransactions = createSelector(
    selectPlayerFeature,
    (state) => state.getPlayerTransactions
);

export const selectPlayerTransactionsDataList = createSelector(
    selectPlayerTransactions,
    (state) => {
        const currencyFormat = new CurrencyFormatPipe();
        
        return ((state?.data ?? []) as Transaction[]).map((transaction) => ({
            ...transaction,
            amount: currencyFormat.transform(transaction.amount) 
        } as Transaction))
    }
);