import { AppStateInterface } from "src/app/shared/types/app-state.interface";
import { AuthStateInterface } from "../types/auth-state.interface";

import { createSelector } from '@ngrx/store';

export const authFeatureSelector = (state: AppStateInterface): AuthStateInterface => state.auth;

export const isSubmittingSelector = createSelector(
    authFeatureSelector, 
    (authState: AuthStateInterface) => authState.isSubmitting
);

export const validationErrorsSelector = createSelector(
    authFeatureSelector,
    (authState: AuthStateInterface) => authState.validationErrors
);

export const isLoggedInSelector = createSelector(
    authFeatureSelector,
    (authState: AuthStateInterface) => authState.isLoggedIn
);

export const isAnonymousSelector = createSelector(
    authFeatureSelector,
    (authState: AuthStateInterface) => authState.isLoggedIn === false
);

export const currentUserSelector = createSelector(
    authFeatureSelector,
    (authState: AuthStateInterface) => authState.currentUser
);

