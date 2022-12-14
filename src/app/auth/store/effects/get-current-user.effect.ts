import { Injectable } from '@angular/core';

import { createEffect, ofType, Actions } from '@ngrx/effects';

import { switchMap, map, catchError } from 'rxjs/operators';

import { AuthService } from '../../services/auth.service';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { of } from 'rxjs';
import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { getCurrentUserAction, getCurrentUserFailureAction, getCurrentUserSuccessAction } from '../actions/get-current-user.actions';

@Injectable()
export class GetCurrentUserEffect {

    getCurrentUser$ = createEffect(() => this.actions$.pipe(
            ofType(getCurrentUserAction),
            switchMap( () => {

                const token = this.peristenceService.get('accessToken');

                if(!token) {
                    return of(getCurrentUserFailureAction())
                }

                return this.authService.getCurrentUser().pipe(
                    map((currentUser: CurrentUserInterface) => {
                        return getCurrentUserSuccessAction({currentUser})
                    }),

                    catchError(() => {
                        return of(getCurrentUserFailureAction())
                    })
                )
            })
        )
    );

    constructor(private actions$: Actions, 
        private authService: AuthService, 
        private peristenceService: PersistanceService,
        ) {

    }
}