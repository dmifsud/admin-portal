import { createFeatureSelector } from '@ngrx/store';
import { PlayersState } from '../reducers';
export const selectPlayerFeature = createFeatureSelector<PlayersState>('players');