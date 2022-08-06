import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalFeedComponent } from './components/global-feed/global-feed.component';
import { RouterModule } from '@angular/router';
import { FeedModule } from '../shared/modules/feed/feed.module';

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
        FeedModule
    ],
    exports: [],
    providers: [],
})
export class GlobalFeedModule {}