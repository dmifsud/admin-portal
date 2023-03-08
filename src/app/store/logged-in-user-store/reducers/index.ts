import { GetLoggedInUserState, getLoggedInUserReducer } from './get-logged-in-user.reducer';
import { ActionReducerMap } from '@ngrx/store';
export interface LoggedInUserState {
    getLoggedInUser: GetLoggedInUserState
};

export const loggedInUserReducers: ActionReducerMap<LoggedInUserState, any> = {
    getLoggedInUser: getLoggedInUserReducer,
    
}