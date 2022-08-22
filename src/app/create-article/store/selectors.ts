import { AppStateInterface } from "src/app/shared/types/app-state.interface";

import { createSelector } from '@ngrx/store';
import { ArticleStateInterface } from "src/app/article/models/article-state.interface";
import { CreateArticleStateInterface } from "./types/create-article.interface";

export const createArticleFeatureSelector = (state: AppStateInterface): CreateArticleStateInterface => state.createArticle;

export const isSubmittingSelector = createSelector(
    createArticleFeatureSelector, 
    (createArticleStateState: CreateArticleStateInterface) => createArticleStateState.isSubmitting
);

export const validationErrorsSelector = createSelector(
    createArticleFeatureSelector,
    (createArticleStateState: CreateArticleStateInterface) => createArticleStateState.validationErrors
);