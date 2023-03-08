import { createFeatureSelector } from '@ngrx/store';
import { LoggedInUserState } from '../reducers';
export const selectLoggedInUserFeature = createFeatureSelector<LoggedInUserState>('auth-user');