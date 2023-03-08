import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Player } from 'src/app/models/player.model';

const BE_URL = 'http://localhost:3000/';

const ENTITIES = {
    players: 'players'
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
        // const params = new HttpParams().set('playerId', id.toString());
        return this.httpClient.get<Player>(
            `${BE_URL}${ENTITIES.players}/${id}`
        );
    }
}