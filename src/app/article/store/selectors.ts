import { AppStateInterface } from "src/app/shared/types/app-state.interface";

import { createSelector } from '@ngrx/store';
import { ArticleStateInterface } from "../models/article-state.interface";

export const articleFeatureSelector = (state: AppStateInterface): ArticleStateInterface => state.article;

export const isLoadingSelector = createSelector(
    articleFeatureSelector, 
    (articleState: ArticleStateInterface) => articleState.isLoading
);

export const articleSelector = createSelector(
    articleFeatureSelector,
    (articleState: ArticleStateInterface) => articleState.data
);

export const articleErrorsSelector = createSelector(
    articleFeatureSelector,
    (articleState: ArticleStateInterface) => articleState.error
);
