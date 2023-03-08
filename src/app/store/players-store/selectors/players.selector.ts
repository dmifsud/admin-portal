import { MatTableDataSource } from '@angular/material/table';
import { createSelector } from '@ngrx/store';
import { Player } from 'src/app/models/player.model';
import { selectPlayerFeature } from './player-state.selector';

export const selectPlayers = createSelector(
    selectPlayerFeature,
    (state) => state.getPlayers
);

export const selectPlayersDataList = createSelector(
    selectPlayers,
    (state) => (state?.data ?? []) as Player[]
);