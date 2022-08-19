import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getArticleAction } from '../../store/actions/get-article.action';

import { Store, select } from '@ngrx/store';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { combineLatest, map, Observable, Subscription } from 'rxjs';
import { articleSelector } from '../../store/selectors';
import { isLoadingSelector } from 'src/app/shared/modules/feed/store/selectors';
import { errorSelector } from 'src/app/shared/modules/popular-tags/store/selectors';
import { currentUserSelector } from 'src/app/auth/store/selectors';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { deleteArticleAction } from '../../store/actions/delete-article.action';

@Component({
    selector: 'mc-article',
    templateUrl: './article.component.html',
    // styleUrls: ['./name.component.scss']
})
export class ArticleComponent implements OnInit {

    slug: string;
    article: ArticleInterface | null;
    articleSubscription: Subscription;
    isLoading$: Observable<boolean>;
    error$: Observable<string | null>;
    isAuthor$: Observable<boolean>;

    constructor(private readonly route: ActivatedRoute, private store: Store) { }

    ngOnInit(): void {
        this._initializeValues();
        this._initializeListeners();
        this._fetchData();
    }

    private _initializeValues(): void {
        this.slug = this.route.snapshot.paramMap.get('slug');
    }

    private _initializeListeners(): void {
        this.articleSubscription = this.store.pipe(select(articleSelector)).subscribe((article: ArticleInterface | null) => {
            this.article = article;
        });
        this.isLoading$ = this.store.pipe(select(isLoadingSelector));
        this.error$ = this.store.pipe(select(errorSelector));
        this.isAuthor$ = combineLatest(
            this.store.pipe(select(articleSelector)),
            this.store.pipe(select(currentUserSelector)),
        ).pipe(
            map( ([article, curreUser]: [ArticleInterface | null, CurrentUserInterface | null]) => {
                if(!article || !curreUser) {
                    return false;
                }
                return curreUser.username === article.author.username;
            })
        )
    }

    private _fetchData(): void {
        this.store.dispatch(getArticleAction({ slug: this.slug }));
    }

    deleteAction(): void {
        this.store.dispatch(deleteArticleAction({slug: this.slug}))
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.articleSubscription.unsubscribe();
    }
}
