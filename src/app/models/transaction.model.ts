export enum TransactionType {
    Deposit = 'DEPOSIT',
    Withdrawal = 'WITHDRAWAL',
    Bet = 'BET',
    Win = 'WIN',
}

export enum TransactionStatus {
    Completed = 'COMPLETED',
    Failed = 'FAILED',
}

export interface Transaction {
    id: number;
    timestamp: string;
    amount: number | string;
    type: TransactionType;
    status: TransactionStatus;
    playerId: number;
}