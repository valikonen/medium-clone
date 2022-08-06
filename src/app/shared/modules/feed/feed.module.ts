import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './components/feed/feed.component';
import { FeedService } from './services/feed.service';
import { EffectsModule } from '@ngrx/effects';
import { GetFeedEffect } from './store/effects/get-feed.effect';
import { reducers } from './store/reducers';
import { StoreModule } from '@ngrx/store';

@NgModule({
    declarations: [
        FeedComponent
    ],
    imports: [ 
        CommonModule,
        StoreModule.forFeature('feed', reducers),
        EffectsModule.forFeature([GetFeedEffect])
    ],
    exports: [
        FeedComponent
    ],
    providers: [
        FeedService
    ],
})
export class FeedModule {}