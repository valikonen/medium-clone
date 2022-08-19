import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { GetPopularTagsEffect } from './store/effects/get-popular-tags.effect';
import { PopularTagsComponent } from './components/popular-tags/popular-tags.component';
import { RouterModule } from '@angular/router';
import { LoadingModule } from '../loading/loading.module';
import { ErrorMessageModule } from '../error-message/error-message.module';
import { reducers } from './store/reducers';

@NgModule({
    declarations: [
        PopularTagsComponent
    ],
    imports: [ 
        CommonModule,
        RouterModule,
        LoadingModule,
        ErrorMessageModule,
        StoreModule.forFeature('popularTags', reducers),
        EffectsModule.forFeature([GetPopularTagsEffect])
    ],
    exports: [
        PopularTagsComponent
    ],
    providers: [],
})
export class PopularTagsModule {}