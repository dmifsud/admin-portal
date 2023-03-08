import { createAction, props } from '@ngrx/store';
import { Transaction } from '../../../models/transaction.model';

export const getTransactions = createAction(
	'[Transactions] Get Transactions',
	props<{
		payload: {
			playerId: number
		};
	}>()
);

export const getTransactionsSuccess = createAction(
	'[Transactions] Get Transactions Success',
	props<{
		payload: Transaction[];
	}>()
);

export const getTransactionsFail = createAction('[Transactions] Get Transactions Fail');
