import { Component, Input, OnInit } from '@angular/core';
import { getFeedAction } from '../../store/actions/get-feed.action';

import { Store, select } from '@ngrx/store';
import { GetFeedResponseInterface } from '../../models/get-feed-response.model';
import { Observable, Subscription } from 'rxjs';
import { feedErrorsSelector, feedSelector, isLoadingSelector } from '../../store/selectors';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { parseUrl, stringify } from 'query-string';

@Component({
    selector: 'mc-feed',
    templateUrl: './feed.component.html',
    // styleUrls: ['./name.component.scss']
})
export class FeedComponent implements OnInit {

    feed$: Observable<GetFeedResponseInterface | null>
    isLoading$: Observable<boolean>;
    error$: Observable<string | null>;
    limit = environment.limit;
    baseUrl: string;
    queryParamasSubscribe: Subscription;
    currentPage: number;
    
    @Input('apiUrl') apiUrlProps: string;

    constructor(private store: Store, private router: Router, private route: ActivatedRoute) {

    }

    ngOnInit(): void {
        this._initializeValues();
        this.initializeListenters();
    }

    private _initializeValues(): void {
        this.isLoading$ = this.store.pipe(select(isLoadingSelector));
        this.error$ = this.store.pipe(select(feedErrorsSelector));
        this.feed$ = this.store.pipe(select(feedSelector));
        this.baseUrl = this.router.url.split('?')[0];
    }

    private initializeListenters() {
        this.queryParamasSubscribe = this.route.queryParams.subscribe((params: Params) => {
            this.currentPage = Number(params['page'] || '1');
            this._fetchFeed();
        });
    }

    private _fetchFeed(): void {
        const offset = this.currentPage * this.limit - this.limit;
        const parsedUrl = parseUrl(this.apiUrlProps);
        const stringifyParamas = stringify({
            limit: this.limit,
            offset,
            ...parsedUrl.query
        });
        const apiUrlWithParamas = `${parsedUrl.url}?${stringifyParamas}`;

        this.store.dispatch(getFeedAction({url: apiUrlWithParamas }));

    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.queryParamasSubscribe.unsubscribe();
    }
}
