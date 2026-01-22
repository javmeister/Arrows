import { Route } from '@angular/router';

export const routes: Route[] = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'landing',
	},
	{
		path: 'landing',
		loadComponent: () =>
			import('../components/landing/landing').then((m) => m.Landing),
	},
	{
		path: 'game',
		loadComponent: () =>
			import('../components/game/game').then((m) => m.Game),
	},
	{
		path: 'leaderboard',
		loadComponent: () =>
			import('../components/leaderboard/leaderboard').then(
				(m) => m.Leaderboard,
			),
	},
	{
		path: 'challenges',
		loadComponent: () =>
			import('../components/challenges/challenges').then((m) => m.Challenges),
	},
];
