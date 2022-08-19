import { Injectable } from '@angular/core';

import { createEffect, ofType, Actions } from '@ngrx/effects';

import { switchMap, map, catchError } from 'rxjs/operators';

import { of } from 'rxjs';
import { getArticleAction, getArticleFailureAction, getArticleSuccessAction } from '../actions/get-article.action';
import { ArticleService } from 'src/app/shared/services/article.service';
import { ArticleInterface } from 'src/app/shared/types/article.interface';

@Injectable()
export class GetArticleEffect {

    getArticle$ = createEffect(() => this.actions$.pipe(
            ofType(getArticleAction),
            switchMap(({slug}) => {

                return this.articleService.getArticle(slug).pipe(
                    map((article: ArticleInterface) => {
                        return getArticleSuccessAction({article})
                    }),

                    catchError(() => {
                        return of(getArticleFailureAction())
                    })
                )
            })
        )
    );

    constructor(private actions$: Actions, 
        private articleService: ArticleService, 
        ) {

    }
}