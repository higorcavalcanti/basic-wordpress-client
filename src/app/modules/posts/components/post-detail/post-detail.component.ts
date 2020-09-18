import { Component, OnDestroy, OnInit } from '@angular/core';
import { WordpressService } from "../../../../shared/services/wordpress.service";
import { ActivatedRoute } from "@angular/router";
import { Post } from "../../../../shared/models/post";
import { SeoService } from "../../../../shared/services/seo.service";

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
    private wordpressService: WordpressService,
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
      console.log(params);
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
        console.log('post', post);
        this.post = post;
        this.loading = false;
        this.error = false;

        this.seoService.setPostMeta( post );
      },
      err => {
        this.error = true;
        this.loading = false;
      }
    );
  }
}
