import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { CurrentUserInterface } from "src/app/shared/types/current-user.interface";
import { Store, select } from '@ngrx/store';
import { currentUserSelector, isAnonymousSelector, isLoggedInSelector } from "src/app/auth/store/selectors";

@Component({
    selector: 'mc-top-bar',
    templateUrl: './top-bar.component.html'
})
export class TopBarComponent {

    isLoggedIn$: Observable<boolean>;
    isAnonymous$: Observable<boolean>;

    currentUser$: Observable<CurrentUserInterface | null>;

    constructor(private store: Store) {}

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
        this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector));
        this.currentUser$ = this.store.pipe(select(currentUserSelector));
    }
}