import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';

import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors';
import { AppStateInterface } from 'src/app/shared/types/app-state.interface';
import { BackendErrorsInterface } from '../../types/backend-errors.interface';
import { loginAction } from '../../store/actions/login.actions';
import { LoginRequestInterface } from '../../types/login-request.interface';

@Component({
    selector: 'mc-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

    form!: FormGroup;
    isSubmitting$!: Observable<boolean>;
    backendErrors$!: Observable<BackendErrorsInterface | null>;

    constructor(private fb: FormBuilder, private store: Store<AppStateInterface>) {

    }

    ngOnInit(): void {
        this._initializeForm();
        this._initializeValues();
    }

    private _initializeForm(): void {
        this.form = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

    private _initializeValues(): void {
        this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
        this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
    }

    onSubmitLogin(): void {
        const request: LoginRequestInterface = {
            user: this.form.value
        }
        this.store.dispatch(loginAction({request: request}));
        
    }
}
