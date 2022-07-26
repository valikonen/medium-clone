import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { RegisterComponent } from "./components/register/register.component";
import { reducers } from "./store/reducers";

import  { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AuthService } from "./services/auth.service";
import { RegisterEffect } from "./store/effects/register.effect";
import { BackendErrorMessagesModule } from "../shared/modules/backend-error-messages/backend-error-messages.module";
import { PersistanceService } from "../shared/services/persistance.service";
import { LoginEffect } from "./store/effects/login.effect";
import { LoginComponent } from "./components/login/login.component";

const routes = [
    {
        path: 'register',
        component:  RegisterComponent
    },
    {
        path: 'login',
        component:  LoginComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature('auth', reducers),
        EffectsModule.forFeature([RegisterEffect, LoginEffect]),
        BackendErrorMessagesModule
    ],
    declarations: [
        RegisterComponent,
        LoginComponent
    ],
    providers: [
        AuthService,
        PersistanceService
    ]
})
export class AuthModule {}