import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Player } from 'src/app/models/player.model';

@Injectable()
export class PlayersBackendService {
    constructor(
        private httpClient: HttpClient,
    ) {}

    public getPlayers(): Observable<Player[]> {
        return this.httpClient.get<Player[]>(
            'http://localhost:3000/players'
        );
    }
}