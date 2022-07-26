import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';

import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { RegisterRequestInterface } from "../types/register-request.interface";
import { environment } from 'src/environments/environment';
import { AuthResponseInterface } from '../types/auth-response.interface';
import { LoginRequestInterface } from '../types/login-request.interface';

@Injectable()
export class AuthService {

    URL = environment.APP_URL;
   
    constructor(private http: HttpClient) {

    }
    // register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    //     return this.http.post<AuthResponseInterface>(`${this.URL}/users`, data).pipe(map((response: AuthResponseInterface) => {
    //         return response.user;
    //     }));
    // }

    private _getUser(response: AuthResponseInterface): CurrentUserInterface {
        return response.user;
    }

    register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
        return this.http
          .post<AuthResponseInterface>(`${this.URL}/users`, data)
          .pipe(map(this._getUser));
    }


    login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
        return this.http
          .post<AuthResponseInterface>(`${this.URL}/users/login`, data)
          .pipe(map(this._getUser));
    }
    
}