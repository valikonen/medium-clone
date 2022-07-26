import { Action, createReducer, on } from "@ngrx/store";
import { AuthStateInterface } from "../types/auth-state.interface";
import { loginAction, loginFailureAction, loginSuccessAction } from "./actions/login.actions";
import { registerAction, registerFailureAction, registerSuccessAction } from "./actions/register.actions";

const initialState: AuthStateInterface = {
    isSubmitting: false,
    currentUser: null,
    validationErrors: null,
    isLoggedIn: null
}

const authReducer = createReducer(
    initialState, 
    on(registerAction, 
        (state): AuthStateInterface => ({
            ...state,
            isSubmitting: true,
            validationErrors: null
        })
    ),
    on(registerSuccessAction, 
        (state, action): AuthStateInterface => ({
            ...state,
            isSubmitting: false,
            isLoggedIn: true,
            currentUser: action.currentUser
        })
    ),
    on(registerFailureAction, (state, action): AuthStateInterface => ({
            ...state,
            isSubmitting: false,
            validationErrors: action.errors
        })
    ),
    on(loginAction, 
        (state): AuthStateInterface => ({
            ...state,
            isSubmitting: true,
            validationErrors: null
        })
    ),
    on(loginSuccessAction, 
        (state, action): AuthStateInterface => ({
            ...state,
            isSubmitting: false,
            isLoggedIn: true,
            currentUser: action.currentUser
        })
    ),
    on(loginFailureAction, (state, action): AuthStateInterface => ({
        ...state,
        isSubmitting: false,
        validationErrors: action.errors
    })
),
);

export function reducers(state: AuthStateInterface, action: Action) {
    return authReducer(state, action);
}