import { Injectable } from '@angular/core';

import { createEffect, ofType, Actions } from '@ngrx/effects';

import { switchMap, map, catchError, tap } from 'rxjs/operators';

import { AuthService } from '../../services/auth.service';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { Router } from '@angular/router';
import { loginAction, loginFailureAction, loginSuccessAction } from '../actions/login.actions';

@Injectable()
export class LoginEffect {


    login$ = createEffect(() => this.actions$.pipe(
            ofType(loginAction),
            switchMap( ({request} ) => {
                return this.authService.login(request).pipe(
                    map((currentUser: CurrentUserInterface) => {
                        this.peristenceService.set('accessToken', currentUser.token);
                        return loginSuccessAction({currentUser})
                    }),

                    catchError((errorResponse: HttpErrorResponse) => {
                        return of(loginFailureAction({errors: errorResponse.error.errors}))
                    })
                )
            })
        )
    );

    redirectAfterSubmit$ = createEffect(
        () => this.actions$.pipe(
            ofType(loginSuccessAction),
            tap(() => {
                this.router.navigateByUrl('/')
            })
        ),
        {
            dispatch: false
        }
    );

    constructor(private actions$: Actions, 
        private authService: AuthService, 
        private peristenceService: PersistanceService,
        private router: Router) {

    }
}