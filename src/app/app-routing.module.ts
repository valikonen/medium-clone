import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/global-feed/global-feed.module').then(m => m.GlobalFeedModule)
  },
  {
    path: 'feed',
    loadChildren: () => import('../app/your-feed/your-feed.module').then(m => m.YourFeedModule)
  },
  {
    path: 'articles/new',
    loadChildren: () => import('../app/create-article/create-article.module').then(m => m.CreateArticleModule)
  },
  {
    path: 'articles',
    loadChildren: () => import('../app/article/article.module').then(m => m.ArticleModule)
  },
  {
    path: 'tags',
    loadChildren: () => import('../app/tag-feed/tag-feed.module').then(m => m.TagFeedModule)
  },
  {
    path: 'register',
    loadChildren: () => import('../app/auth/auth.module').then(m => m.AuthModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
