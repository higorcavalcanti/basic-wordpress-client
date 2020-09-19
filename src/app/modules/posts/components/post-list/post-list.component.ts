import { Component, OnInit } from '@angular/core';
import { WordpressService } from "../../../../shared/services/wordpress.service";
import { ActivatedRoute } from "@angular/router";
import { startWith } from "rxjs/operators";
import { combineLatest } from "rxjs";
import { PostsResponse } from "../../../../shared/interfaces/posts-response";
import { PostsRequestOptions } from "../../../../shared/interfaces/posts-request-options";
import { WordpressTransferStateService } from "../../../../shared/services/wordpress-transfer-state.service";

export enum PostListType {
  LAST_POSTS,
  SEARCH
}

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  type: PostListType;

  postsResponse: PostsResponse;
  postsOptions: PostsRequestOptions;

  isLoading: boolean;
  isError: boolean;

  get title() {
    switch ( this.type ) {
      case PostListType.LAST_POSTS: return 'Últimos posts';
      case PostListType.SEARCH: return 'Pesquisar posts';
      default: return 'Posts'
    }
  }

  constructor(
    private wordpressService: WordpressTransferStateService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.listenRouteData();
  }

  listenRouteData() {

    const data$ = this.route.data.pipe( startWith() );
    const queryParams$ = this.route.queryParams.pipe( startWith() );
    combineLatest([data$, queryParams$]).subscribe(response => {
      const [data, queryParams] = response;
      this.type = data?.type;
      this.postsOptions = WordpressService.getRequestOptionsByParams( queryParams );
      this.getPosts();
    });
  }

  getPosts() {
    this.isLoading = true;
    this.isError = false;

    if ( this.postsResponse ) {
      this.postsResponse.data = undefined;
    }

    this.wordpressService.posts( this.postsOptions ).subscribe(
      response => {
        this.postsResponse = response;
        this.isLoading = false;
        this.isError = false;
      },
      () => {
        this.isLoading = false;
        this.isError = true;
      }
    );
  }

}
