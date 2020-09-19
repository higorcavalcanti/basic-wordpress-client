import { Component, Input, OnInit } from '@angular/core';
import { Post } from "../../../../shared/models/post";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Component({
  selector: 'app-post-detail-author',
  templateUrl: './post-detail-author.component.html',
  styleUrls: ['./post-detail-author.component.scss']
})
export class PostDetailAuthorComponent implements OnInit {

  private _post: Post;
  @Input()
  get post(): Post { return this._post }
  set post(post: Post) {
    this._post = post;
    this.description = this.sanitizer.bypassSecurityTrustHtml( post?.author?.description );
  }

  description: SafeHtml;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
  }

}
