import { createSelector } from '@ngrx/store';
import { selectLoggedInUserFeature } from './auth-state.selector';

export const selectLoggedInUser = createSelector(
    selectLoggedInUserFeature,
    (state) => state.getLoggedInUser
)
