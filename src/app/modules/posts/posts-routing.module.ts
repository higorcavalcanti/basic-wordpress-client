import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from "./components/posts/posts.component";
import { PostListComponent, PostListType } from "./components/post-list/post-list.component";
import { PostDetailComponent } from "./components/post-detail/post-detail.component";

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list'
      },
      {
        path: 'list',
        data: {
          type: PostListType.LAST_POSTS
        },
        component: PostListComponent
      },
      {
        path: 'search',
        data: {
          type: PostListType.SEARCH
        },
        component: PostListComponent
      },
      {
        path: ':id',
        component: PostDetailComponent,
        children: [
          {
            path: ':slug'
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
