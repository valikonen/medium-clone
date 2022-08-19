import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './components/article/article.component';
import { EffectsModule } from '@ngrx/effects';
import { GetArticleEffect } from './store/effects/get-article.effect';
import { reducers } from './store/reducers';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { ErrorMessageModule } from '../shared/modules/error-message/error-message.module';
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { PaginationModule } from '../shared/modules/pagination/pagination.module';
import { TagListModule } from '../shared/modules/tag-list/tag-list.module';
import { DeleteArticleEffect } from './store/effects/delete-article.effect';

@NgModule({
    declarations: [
        ArticleComponent
    ],
    imports: [ 
        CommonModule,
        RouterModule.forChild([
            {
                path: ':slug',
                component: ArticleComponent
            }
        ]),
        StoreModule.forFeature('article', reducers),
        EffectsModule.forFeature([GetArticleEffect, DeleteArticleEffect]),
        ErrorMessageModule,
        LoadingModule,
        PaginationModule,
        TagListModule
    ],
    exports: [
    ],
    providers: [
    ],
})
export class ArticleModule {}