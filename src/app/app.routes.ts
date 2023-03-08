import { Route } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './features/login/login/login.component';
import { PlayersComponent } from './features/players/players/players.component';
import { NonauthGuard } from './nonauth.guard';
import { PlayerDetailsComponent } from './features/players/players/player-details/player-details.component';

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
	},
	{
		path: 'players/:id',
		component: PlayerDetailsComponent,
		canActivate: [AuthGuard]
	}
];