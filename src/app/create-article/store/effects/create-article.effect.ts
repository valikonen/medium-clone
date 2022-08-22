import { Injectable } from '@angular/core';

import { createEffect, ofType, Actions } from '@ngrx/effects';

import { switchMap, map, catchError, tap } from 'rxjs/operators';

import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { Router } from '@angular/router';
import { CreateArticleService } from '../../services/create-article.service';
import { createArticleAction, createArticleFailureAction, createArticleSuccessAction } from '../actions/create-article.action';
import { ArticleInterface } from 'src/app/shared/types/article.interface';

@Injectable()
export class CreateArticleEffect {


    createArticle$ = createEffect(() => this.actions$.pipe(
            ofType(createArticleAction),
            switchMap( ({articleInput} ) => {
                return this.createArticleService.createArticle(articleInput).pipe(
                    map((article: ArticleInterface) => {
                        return createArticleSuccessAction({article})
                    }),

                    catchError((errorResponse: HttpErrorResponse) => {
                        return of(createArticleFailureAction({error: errorResponse.error.errors}))
                    })
                )
            })
        )
    );

    redirectAfterCreate$ = createEffect(
        () => this.actions$.pipe(
            ofType(createArticleSuccessAction),
            tap(({ article }) => {
                this.router.navigate(['/articles', article.slug])
            })
        ),
        {
            dispatch: false
        }
    );

    constructor(private actions$: Actions, 
        private createArticleService: CreateArticleService, 
        private peristenceService: PersistanceService,
        private router: Router) {

    }
}