import { PopularTagType } from "./popular-tag.interface";
import { ProfileInterface } from "./profile.interface";

export interface ArticleInterface {
    title: string;
    slug: string;
    body: string;
    createdAt: string;
    tagList: PopularTagType[];
    description: string;
    author: ProfileInterface;
    favorited: boolean;
    favoritesCount: number;
    articlesCount: number;
}