import { Component } from '@angular/core';
import { getCurrentUserAction } from './auth/store/actions/get-current-user.actions';

import { Store } from '@ngrx/store';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private store: Store) {

  }

  ngOnInit() {
    this.store.dispatch(getCurrentUserAction())
  }

}
