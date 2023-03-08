import { createAction, props } from '@ngrx/store';
import { AuthUser } from 'src/app/models/auth-user.model';
import { Player } from 'src/app/models/player.model';

export const getLoggedInUser = createAction(
	'[User] Get Logged In User',
	props<{
		payload: {
			username: string;
			password: string;
		}
	}>()
);

export const getLoggedInUserSuccess = createAction(
	'[User] Get Logged In User Success',
	props<{
		payload: {
			user: AuthUser;
			redirect: boolean;
		};
	}>()
);

export const getLoggedInUserFail = createAction('[User] Get Logged In User Fail');


export const hydrateCredentials = createAction(
	'[User] Hydrate'
)