import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalFeedComponent } from './components/global-feed/global-feed.component';
import { RouterModule } from '@angular/router';
import { FeedModule } from '../shared/modules/feed/feed.module';
import { BannerModule } from '../shared/modules/banner/banner.module';
import { PopularTagsModule } from '../shared/modules/popular-tags/popular-tags.module';
import { FeedTogglerModule } from '../shared/modules/feed-toggler/feed-toggler.module';

@NgModule({
    declarations: [
        GlobalFeedComponent
    ],
    imports: [ 
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: GlobalFeedComponent
            }
        ]),
        FeedModule,
        BannerModule,
        PopularTagsModule,
        FeedTogglerModule
    ],
    exports: [],
    providers: [],
})
export class GlobalFeedModule {}