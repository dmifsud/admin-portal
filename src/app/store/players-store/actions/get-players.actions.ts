import { createAction, props } from '@ngrx/store';
import { Player } from 'src/app/models/player.model';

export const getPlayers = createAction(
	'[Players] Get Players'
);

export const getPlayersSuccess = createAction(
	'[Players] Get Players Success',
	props<{
		payload: Player[];
	}>()
);

export const getPlayersFail = createAction('[Players] Get Players Fail');
