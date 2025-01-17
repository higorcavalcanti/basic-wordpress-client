import { Component, Input, OnInit } from '@angular/core';
import { Post } from "../../../../shared/models/post";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Component({
  selector: 'app-post-list-post',
  templateUrl: './post-list-post.component.html',
  styleUrls: ['./post-list-post.component.scss']
})
export class PostListPostComponent implements OnInit {

  private _post: Post;
  @Input()
  get post(): Post { return this._post }
  set post(post: Post) {
    this._post = post;
    this.routerLink = '/posts/' + post?.id + '/' + post?.slug;
    this.content = this.sanitizer.bypassSecurityTrustHtml( post?.excerpt );
  }

  routerLink: string;
  content: SafeHtml;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
  }
}
