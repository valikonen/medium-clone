import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendErrorsInterface } from 'src/app/auth/types/backend-errors.interface';
import { ArticleInputInterface } from 'src/app/shared/types/article-input.interface';

import { Store, select } from '@ngrx/store';
import { isSubmittingSelector, validationErrorsSelector } from 'src/app/auth/store/selectors';
import { createArticleAction } from '../../store/actions/create-article.action';

@Component({
    selector: 'mc-create-article',
    templateUrl: './create-article.component.html',
    // styleUrls: ['./name.component.scss']
})
export class CreateArticleComponent implements OnInit {
    initialValues: ArticleInputInterface = {
        title: '',
        description: '',
        body: '',
        tagList: []
    }

    isSubmitting$: Observable<boolean>;
    backendErrors$: Observable<BackendErrorsInterface | null>;
    
    constructor(private store: Store) { }

    ngOnInit(): void {
        this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
        this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
    }

    onSubmit(articleInput: ArticleInputInterface) {
        console.log('articleInput: ', articleInput);
        
        this.store.dispatch(createArticleAction({articleInput}))

    }
}
