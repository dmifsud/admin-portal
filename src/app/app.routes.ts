import { Route } from '@angular/router';
import { LoginComponent } from './features/login/login/login.component';
import { PlayersComponent } from './features/players/players/players.component';

export const routes: Route[] = [
	// Public routes
	{
		path: 'login',
		component: LoginComponent,
		// canActivate: [ReverseLoginGuard],
	},
	// Private routes
	{
		path: 'players',
		component: PlayersComponent,
	}
];