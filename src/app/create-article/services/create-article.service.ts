import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ArticleInputInterface } from 'src/app/shared/types/article-input.interface';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { SaveArticleResponseInterface } from 'src/app/shared/types/save-article-response.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class CreateArticleService {

    constructor(private http: HttpClient) {}

    createArticle(articleInput: ArticleInputInterface): Observable<ArticleInterface> {
        const fullUrl = environment.APP_URL + '/articles';

        return this.http.post<SaveArticleResponseInterface>(fullUrl, articleInput).pipe(
            map((response: SaveArticleResponseInterface) => response.article)
        )
    }
}