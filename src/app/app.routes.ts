import { Route } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './features/login/login/login.component';
import { PlayersComponent } from './features/players/players/players.component';
import { NonauthGuard } from './nonauth.guard';

export const routes: Route[] = [
	// PUBLIC
	{
		path: 'login',
		component: LoginComponent,
		canActivate: [NonauthGuard]
	},
	// PRIVATE
	{
		path: 'players',
		component: PlayersComponent,
        canActivate: [AuthGuard]
	}
];