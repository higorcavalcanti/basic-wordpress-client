import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostListPostComponent } from './components/post-list-post/post-list-post.component';
import { PostSearchComponent } from './components/post-search/post-search.component';
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  declarations: [PostListComponent, PostDetailComponent, PostsComponent, PostListPostComponent, PostSearchComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class PostsModule { }
