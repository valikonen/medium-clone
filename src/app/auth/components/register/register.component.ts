import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';

import { registerAction } from '../../store/actions/register.actions'
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors';
import { AppStateInterface } from 'src/app/shared/types/app-state.interface';
import { RegisterRequestInterface } from '../../types/register-request.interface';
import { BackendErrorsInterface } from '../../types/backend-errors.interface';

@Component({
    selector: 'mc-register',
    templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

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
            username: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

    private _initializeValues(): void {
        this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
        this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
    }

    onSubmitRegister(): void {
        const request: RegisterRequestInterface = {
            user: this.form.value
        }
        this.store.dispatch(registerAction({request: request}));
        // this.authService.register(this.form.value).subscribe((currentUser) => {
        //     console.log(currentUser);
            
        // });
    }
}
