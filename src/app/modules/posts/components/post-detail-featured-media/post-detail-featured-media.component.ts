import { Component, Input, OnInit } from '@angular/core';
import { Post } from "../../../../shared/models/post";

@Component({
  selector: 'app-post-detail-featured-media',
  templateUrl: './post-detail-featured-media.component.html',
  styleUrls: ['./post-detail-featured-media.component.scss']
})
export class PostDetailFeaturedMediaComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit(): void {
  }

}
