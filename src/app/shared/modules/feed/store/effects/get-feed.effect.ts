import { Injectable } from '@angular/core';

import { createEffect, ofType, Actions } from '@ngrx/effects';

import { switchMap, map, catchError } from 'rxjs/operators';

import { of } from 'rxjs';
import { FeedService } from '../../services/feed.service';
import { getFeedAction, getFeedFailureAction, getFeedSuccessAction } from '../actions/get-feed.action';
import { GetFeedResponseInterface } from '../../models/get-feed-response.model';

@Injectable()
export class GetFeedEffect {

    getFeed$ = createEffect(() => this.actions$.pipe(
            ofType(getFeedAction),
            switchMap( ({url}) => {

                return this.feedService.getFeed(url).pipe(
                    map((feed: GetFeedResponseInterface) => {
                        return getFeedSuccessAction({feed})
                    }),

                    catchError(() => {
                        return of(getFeedFailureAction())
                    })
                )
            })
        )
    );

    constructor(private actions$: Actions, 
        private feedService: FeedService, 
        ) {

    }
}