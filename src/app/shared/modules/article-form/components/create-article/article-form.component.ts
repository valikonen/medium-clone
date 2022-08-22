import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BackendErrorsInterface } from 'src/app/auth/types/backend-errors.interface';
import { ArticleInputInterface } from 'src/app/shared/types/article-input.interface';

@Component({
    selector: 'mc-article-form',
    templateUrl: './article-form.component.html',
    // styleUrls: ['./name.component.scss']
})
export class ArticleFormComponent {

    @Input('initialValues') initialValuesProps: ArticleInputInterface;
    @Input('isSubmitting') isSubmittingProps: boolean;
    @Input('errors') errorsProps: BackendErrorsInterface;

    @Output('articleSubmit') articleSubmitEvent = new EventEmitter<ArticleInputInterface>();

    form: FormGroup;
    
    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this._initializeForm();
    }

    private _initializeForm(): void {
        this.form = this.fb.group({
            title: this.initialValuesProps?.title,
            description: this.initialValuesProps?.description,
            body: this.initialValuesProps?.body,
            tagList: this.initialValuesProps?.tagList.join(' ')
        });
    }

    onSubmit(): void {
        this.articleSubmitEvent.emit(this.form.value);
    }

}
