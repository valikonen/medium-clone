import { createReducer, on, Action } from '@ngrx/store';
import { createArticleAction, createArticleFailureAction, createArticleSuccessAction } from './actions/create-article.action';

import { CreateArticleStateInterface } from "./types/create-article.interface";

const initialState: CreateArticleStateInterface = {
    isSubmitting: false,
    validationErrors: null
}

const createArticleReducer = createReducer(
    initialState,
    on(
        createArticleAction,
        (state): CreateArticleStateInterface => ({
            ...state,
            isSubmitting: true
        })
    ),
    on(
        createArticleSuccessAction,
        (state): CreateArticleStateInterface => ({
            ...state,
            isSubmitting: false
        })
    ),
    on(
        createArticleFailureAction,
        (state, action): CreateArticleStateInterface => ({
            ...state,
            isSubmitting: false,
            validationErrors: action.error
        })
    )
);

export function reducers(state: CreateArticleStateInterface, action: Action) {
    return createArticleReducer(state, action);
}