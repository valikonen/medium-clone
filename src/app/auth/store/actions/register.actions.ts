import { createAction, props } from '@ngrx/store';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { BackendErrorsInterface } from '../../types/backend-errors.interface';
import { RegisterRequestInterface } from '../../types/register-request.interface';

import { ActionTypes } from '../actionTypes';

export const registerAction = createAction(
    ActionTypes.REGISTER,
    props<{request: RegisterRequestInterface}>()
    // username: string, email: string, password: string
);

export const registerSuccessAction = createAction(
    ActionTypes.REGISTER_SUCCESS,
    props<{ currentUser: CurrentUserInterface }>()
);

export const registerFailureAction = createAction(
    ActionTypes.REGISTER_FAILURE,
    props<{errors: BackendErrorsInterface}>()
);

