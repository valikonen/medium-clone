import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticleFormComponent } from './components/create-article/article-form.component';
import { BackendErrorMessagesModule } from '../backend-error-messages/backend-error-messages.module';

@NgModule({
    declarations: [
        ArticleFormComponent
    ],
    imports: [ 
        CommonModule,
        ReactiveFormsModule,
        BackendErrorMessagesModule
     ],
    exports: [
        ArticleFormComponent
    ],
    providers: [],
})
export class ArticleFormModule {}