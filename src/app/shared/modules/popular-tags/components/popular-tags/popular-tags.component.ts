import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PopularTagType } from 'src/app/shared/types/popular-tag.interface';
import { errorSelector, popularTagsSelector } from '../../store/selectors';

import { Store, select } from '@ngrx/store';
import { isLoadingSelector } from '../../../feed/store/selectors';
import { getPopularTagsAction } from '../../store/actions/get-popular-tags.action';

@Component({
    selector: 'mc-popular-tags',
    templateUrl: './popular-tags.component.html',
    // styleUrls: ['./name.component.scss']
})
export class PopularTagsComponent implements OnInit {

    popularTags$: Observable<PopularTagType[]>;
    isLoading$: Observable<boolean>;
    error$: Observable<string | null>;

    constructor(private store: Store) { }

    ngOnInit(): void {
        this.initializeValues();
        this.fetchData();
    }

    initializeValues(): void {
        this.popularTags$ = this.store.pipe(select(popularTagsSelector));
        this.isLoading$ = this.store.pipe(select(isLoadingSelector));
        this.error$ = this.store.pipe(select(errorSelector));
    }

    fetchData(): void {
        this.store.dispatch(getPopularTagsAction());
    }
}
