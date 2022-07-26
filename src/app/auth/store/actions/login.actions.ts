import { createAction, props } from '@ngrx/store';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { BackendErrorsInterface } from '../../types/backend-errors.interface';

import { LoginRequestInterface } from "../../types/login-request.interface";
import { ActionTypes } from "../actionTypes";

export const loginAction = createAction(
    ActionTypes.LOGIN,
    props<{ request: LoginRequestInterface }>()
);

export const loginSuccessAction = createAction(
    ActionTypes.LOGIN_SUCCESS,
    props<{ currentUser: CurrentUserInterface }>()
);

export const loginFailureAction = createAction(
    ActionTypes.LOGIN_FAILURE,
    props<{ errors: BackendErrorsInterface }>()
);