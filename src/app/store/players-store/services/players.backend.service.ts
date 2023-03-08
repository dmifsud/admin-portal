import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Player } from 'src/app/models/player.model';
import { Transaction } from 'src/app/models/transaction.model';

const BE_URL = 'http://localhost:3000/';
// TODO: make this more centralized
const ENTITIES = {
    players: 'players',
    playerTransactions: 'players/#id/transactions'
};

@Injectable()
export class PlayersBackendService {
    constructor(
        private httpClient: HttpClient,
    ) {}

    public getPlayers(): Observable<Player[]> {
        return this.httpClient.get<Player[]>(
            `${BE_URL}${ENTITIES.players}`
        );
    }

    public getPlayer(id: number): Observable<Player> {
        return this.httpClient.get<Player>(
            `${BE_URL}${ENTITIES.players}/${id}`
        );
    }

    // TODO: move this to transactions.backend.service
    public getTransactions(playerId: number): Observable<Transaction[]> {
        return this.httpClient.get<Transaction[]>(
            `${BE_URL}${ENTITIES.playerTransactions.replace('#id', playerId.toString())}`
        );
    }
}