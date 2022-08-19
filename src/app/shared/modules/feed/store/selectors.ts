import { AppStateInterface } from "src/app/shared/types/app-state.interface";

import { createSelector } from '@ngrx/store';
import { FeedStateInterface } from "../models/feed-state.interface";

export const feedFeatureSelector = (state: AppStateInterface): FeedStateInterface => state.feed;

export const isLoadingSelector = createSelector(
    feedFeatureSelector, 
    (feedState: FeedStateInterface) => feedState.isLoading
);

export const feedSelector = createSelector(
    feedFeatureSelector,
    (feedState: FeedStateInterface) => feedState.data
);

export const feedErrorsSelector = createSelector(
    feedFeatureSelector,
    (feedState: FeedStateInterface) => feedState.error
);
