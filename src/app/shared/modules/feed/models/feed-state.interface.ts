import { GetFeedResponseInterface } from "./get-feed-response.model";

export interface FeedStateInterface {
    isLoading: boolean;
    data: GetFeedResponseInterface | null;
    error: string | null;
}