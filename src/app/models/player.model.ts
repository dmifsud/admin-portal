export enum PlayerStatus {
    Active = 'ACTIVE',
    Disabled = 'DISABLED',
}


export interface Player {
    id: number;
    name: string;
    surname: string;
    email: string;
    status: PlayerStatus;
    balance: number | string;
    registrationTimestamp: string;
}