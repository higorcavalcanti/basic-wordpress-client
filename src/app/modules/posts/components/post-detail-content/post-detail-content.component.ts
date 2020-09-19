import { Component, Input, OnInit } from '@angular/core';
import { Post } from "../../../../shared/models/post";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Component({
  selector: 'app-post-detail-content',
  templateUrl: './post-detail-content.component.html',
  styleUrls: ['./post-detail-content.component.scss']
})
export class PostDetailContentComponent implements OnInit {

  private _post: Post;
  @Input()
  get post(): Post { return this._post }
  set post(post: Post) {
    this._post = post;
    this.content = this.sanitizer.bypassSecurityTrustHtml( post?.content );
  }

  content: SafeHtml;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
  }

}
