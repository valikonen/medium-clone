import { Injectable } from '@angular/core';

import { createEffect, ofType, Actions } from '@ngrx/effects';

import { switchMap, map, catchError, tap } from 'rxjs/operators';

import { of } from 'rxjs';
import { ArticleService } from 'src/app/shared/services/article.service';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { deleteArticleAction, deleteArticleFailureAction, deleteArticleSuccessAction } from '../actions/delete-article.action';
import { Router } from '@angular/router';

@Injectable()
export class DeleteArticleEffect {

    deleteArticle$ = createEffect(() => this.actions$.pipe(
            ofType(deleteArticleAction),
            switchMap(({slug}) => {

                return this.articleService.deleteArticle(slug).pipe(
                    map(() => deleteArticleSuccessAction()),

                    catchError(() => {
                        return of(deleteArticleFailureAction())
                    })
                )
            })
        )
    );

    redirectAfterDelete$ = createEffect(
        () => this.actions$.pipe(
            ofType(deleteArticleSuccessAction),
            tap(() => {
                this.router.navigateByUrl('/')
            })
        ),
        {
            dispatch: false
        }
    );
    constructor(private router: Router, private actions$: Actions, 
        private articleService: ArticleService, 
        ) {

    }
}