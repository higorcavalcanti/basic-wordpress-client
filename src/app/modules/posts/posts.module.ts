import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostListPostComponent } from './components/post-list-post/post-list-post.component';
import { PostSearchComponent } from './components/post-search/post-search.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../../shared/shared.module";
import { PostDetailFeaturedMediaComponent } from './components/post-detail-featured-media/post-detail-featured-media.component';
import { PostDetailBibliographyComponent } from './components/post-detail-bibliography/post-detail-bibliography.component';
import { PostDetailAuthorComponent } from './components/post-detail-author/post-detail-author.component';
import { PostListOrderComponent } from './components/post-list-order/post-list-order.component';


@NgModule({
  declarations: [
    PostListComponent,
    PostDetailComponent,
    PostsComponent,
    PostListPostComponent,
    PostSearchComponent,
    PostDetailFeaturedMediaComponent,
    PostDetailBiographyComponent,
    PostDetailAuthorComponent,
    PostListOrderComponent,
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
  ]
})
export class PostsModule { }
