import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { RouterModule } from '@angular/router';
import { ArticleFormModule } from '../shared/modules/article-form/article-form.module';
import { CreateArticleService } from './services/create-article.service';
import { EffectsModule } from '@ngrx/effects';
import { CreateArticleEffect } from './store/effects/create-article.effect';
import { reducers } from './store/reducers';
import { StoreModule } from '@ngrx/store';
@NgModule({
    declarations: [
        CreateArticleComponent
    ],
    imports: [ 
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: CreateArticleComponent
            }
        ]),
        ArticleFormModule,
        StoreModule.forFeature('createArticle', reducers),
        EffectsModule.forFeature([CreateArticleEffect]),
        
     ],
    exports: [],
    providers: [
        CreateArticleService
    ],
})
export class CreateArticleModule {}