import { Injectable } from '@angular/core';

import { createEffect, ofType, Actions } from '@ngrx/effects';

import { switchMap, map, catchError } from 'rxjs/operators';

import { of } from 'rxjs';
import { PopularTagsService } from '../../services/popular-tags.service';
import { getPopularTagsAction, getPopularTagsFailureAction, getPopularTagsSuccessAction } from '../actions/get-popular-tags.action';
import { PopularTagType } from 'src/app/shared/types/popular-tag.interface';

@Injectable()
export class GetPopularTagsEffect {

    getPopularTags$ = createEffect(() => this.actions$.pipe(
        ofType(getPopularTagsAction),
        switchMap( () => {
            return this.popularTagsService.getPopularTags().pipe(
                map((popularTags: PopularTagType[]) => {
                    console.log('createEffect: getPopularTags$');
                    
                    return getPopularTagsSuccessAction({popularTags})
                }),

                catchError(() => {
                    return of(getPopularTagsFailureAction())
                })
            )
        }))
    );

    constructor(private actions$: Actions, 
        private popularTagsService: PopularTagsService) {
    }
}