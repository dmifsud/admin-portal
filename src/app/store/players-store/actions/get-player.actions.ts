import { createAction, props } from '@ngrx/store';
import { Player } from 'src/app/models/player.model';

export const getPlayer = createAction(
	'[Player] Get Player',
	props<{
		payload: {
			id: number
		}
	}>()
);

export const getPlayerSuccess = createAction(
	'[Player] Get Player Success',
	props<{
		payload: Player;
	}>()
);

export const getPlayerFail = createAction('[Player] Get Player Fail');
