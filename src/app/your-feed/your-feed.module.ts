import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YourFeedComponent } from './components/your-feed/your-feed.component';
import { RouterModule } from '@angular/router';
import { FeedModule } from '../shared/modules/feed/feed.module';
import { BannerModule } from '../shared/modules/banner/banner.module';
import { PopularTagsModule } from '../shared/modules/popular-tags/popular-tags.module';
import { FeedTogglerModule } from '../shared/modules/feed-toggler/feed-toggler.module';

@NgModule({
    declarations: [
        YourFeedComponent
    ],
    imports: [ 
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: YourFeedComponent
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
export class YourFeedModule {}