import { ArticleStateInterface } from "../models/article-state.interface";
import { createReducer, on, Action } from '@ngrx/store';
import { routerNavigatedAction, routerNavigationAction } from "@ngrx/router-store";
import { getArticleAction, getArticleFailureAction, getArticleSuccessAction } from "./actions/get-article.action";

const initialState: ArticleStateInterface = {
    isLoading: false,
    data: null,
    error: null
}

const articleReducer = createReducer(
    initialState,
    on(
        getArticleAction, 
        (state): ArticleStateInterface => ({
            ...state,
            isLoading: true
        })
    ),
    on(
        getArticleSuccessAction, 
        (state, action): ArticleStateInterface => ({
            ...state,
            isLoading: false,
            data: action.article
        })
    ),
    on(
        getArticleFailureAction, 
        (state): ArticleStateInterface => ({
            ...state,
            isLoading: false,
            
        })
    ),
    on(routerNavigationAction, (): ArticleStateInterface => initialState)
)

export function reducers(state: ArticleStateInterface, action: Action) {
    return articleReducer(state, action)
}