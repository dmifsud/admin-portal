import { createReducer, on } from '@ngrx/store';
import { StateSlice } from '../../../models/state-slice.model';
import {
  getLoggedInUser,
  getLoggedInUserFail,
  getLoggedInUserSuccess,
} from '../actions/get-logged-in-user.actions';
import { AuthUser } from '../../../models/auth-user.model';
import { AuthHelper } from '../../../helpers/auth.helper';
import { logout } from '../actions/logout.actions';
export type GetLoggedInUserState = StateSlice<AuthUser | null>;

const initialState: GetLoggedInUserState = {
  data: null,
  loading: false,
  loaded: false,
  error: null,
};

export const getLoggedInUserReducer = createReducer(
  initialState,
  on(
    getLoggedInUser,
    (): GetLoggedInUserState => ({
      ...initialState,
      loading: true,
    })
  ),
  on(
    getLoggedInUserSuccess,
    (_state, action): GetLoggedInUserState => ({
      ...initialState,
      data: action.payload.user,
      loaded: true,
    })
  ),
  on(
    getLoggedInUserFail,
    (state): GetLoggedInUserState => ({
      ...state,
      loading: false,
      loaded: false,
      error: true,
    })
  ),
  on(
    logout,
    (): GetLoggedInUserState => ({
        ...initialState
    })
  )
);
