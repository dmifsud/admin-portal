export enum Role {
    Admin = 'ADMIN',
    DataManager = 'DATA_MANAGER',
}

export interface AuthUser {
    id: number;
    username: string;
    name: string;
    surname: string;
    email: string;
    role: Role;
}