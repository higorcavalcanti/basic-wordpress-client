import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Post } from "../../../../shared/models/post";
import { SeoService } from "../../../../shared/services/seo.service";
import { WordpressTransferStateService } from "../../../../shared/services/wordpress-transfer-state.service";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit, OnDestroy {

  post_id: string;
  post: Post;

  loading: boolean;
  error: boolean;

  constructor(
    private wordpressService: WordpressTransferStateService,
    private route: ActivatedRoute,
    private seoService: SeoService,
  ) { }

  ngOnInit(): void {
    this.listenRouteParams();
  }

  ngOnDestroy() {
    this.seoService.removePostMeta( this.post );
  }

  listenRouteParams() {
    this.route.params.subscribe(params => {
      this.post_id = params?.id;
      if ( this.post_id ) {
        this.loadPost();
      }
    });
  }

  loadPost() {
    this.loading = true;
    this.error = false;
    this.wordpressService.post( this.post_id ).subscribe(
      post => {
        this.post = post;
        this.loading = false;
        this.error = false;

        this.seoService.setPostMeta( post );
      },
      () => {
        this.error = true;
        this.loading = false;
      }
    );
  }
}
