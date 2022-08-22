import { AuthStateInterface } from "src/app/auth/types/auth-state.interface";
import { CreateArticleStateInterface } from "src/app/create-article/store/types/create-article.interface";
import { ArticleStateInterface } from "../../article/models/article-state.interface";
import { FeedStateInterface } from "../modules/feed/models/feed-state.interface";
import { PopularTagsStateInterface } from "../modules/popular-tags/types/popular-tags.model";

export interface AppStateInterface {
    auth: AuthStateInterface,
    feed: FeedStateInterface,
    popularTags: PopularTagsStateInterface,
    article: ArticleStateInterface,
    createArticle: CreateArticleStateInterface
}