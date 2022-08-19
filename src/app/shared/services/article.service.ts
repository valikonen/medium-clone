import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ArticleInterface } from '../types/article.interface';
import { GetArticleResponseInterface } from '../types/get-article-response.model';

@Injectable({
    providedIn: 'root'
})
export class ArticleService {

    constructor(private http: HttpClient) {}

    getArticle(slug: string): Observable<ArticleInterface> {

        const fullUrl = `${environment.APP_URL}/articles/${slug}`;

        return this.http.get<GetArticleResponseInterface>(fullUrl).pipe(
            map((response: GetArticleResponseInterface) => response.article)
        );

    }

    deleteArticle(slug: string): Observable<{}> {
        const fullUrl = `${environment.APP_URL}/articles/${slug}`;
        return this.http.delete<{}>(fullUrl);
    }

}