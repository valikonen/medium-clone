import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FeedModule } from '../shared/modules/feed/feed.module';
import { BannerModule } from '../shared/modules/banner/banner.module';
import { PopularTagsModule } from '../shared/modules/popular-tags/popular-tags.module';
import { FeedTogglerModule } from '../shared/modules/feed-toggler/feed-toggler.module';
import { TagFeedComponent } from './components/tag-feed/tag-feed.component';

@NgModule({
    declarations: [
        TagFeedComponent
    ],
    imports: [ 
        CommonModule,
        RouterModule.forChild([
            {
                path: ':slug',
                component: TagFeedComponent
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
export class TagFeedModule {}