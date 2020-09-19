import { Component, Input, OnInit } from '@angular/core';
import { Post } from "../../../../shared/models/post";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Component({
  selector: 'app-post-detail-bibliography',
  templateUrl: './post-detail-bibliography.component.html',
  styleUrls: ['./post-detail-bibliography.component.scss']
})
export class PostDetailBibliographyComponent implements OnInit {

  @Input()
  set post(post: Post) {
    this.bibliography = this.sanitizer.bypassSecurityTrustHtml( post?.bibliography );
  }

  bibliography: SafeHtml;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
  }

}
