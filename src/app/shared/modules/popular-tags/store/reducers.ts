import { on, createReducer, Action } from "@ngrx/store";
import { PopularTagsStateInterface } from "../types/popular-tags.model";
import { getPopularTagsAction, getPopularTagsFailureAction, getPopularTagsSuccessAction } from "./actions/get-popular-tags.action";

const initialState: PopularTagsStateInterface = {
    data: null,
    isLoading: false,
    error: null
}

const popularTagsReducer = createReducer(
    initialState,
    on(
        getPopularTagsAction,
        (state): PopularTagsStateInterface => ({
            ...state,
            isLoading: true
        })
    ),
    on(
        getPopularTagsSuccessAction,
        (state, action): PopularTagsStateInterface => ({
            ...state,
            isLoading: true,
            data: action.popularTags
        })
    ),
    on(
        getPopularTagsFailureAction,
        (state): PopularTagsStateInterface => ({
            ...state,
            isLoading: false,
            error: 'Could not get popular tags'
        })
    )
);

export function reducers(state: PopularTagsStateInterface, action: Action) {
    return popularTagsReducer(state, action)
}