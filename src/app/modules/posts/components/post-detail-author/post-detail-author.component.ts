import { Component, Input, OnInit } from '@angular/core';
import { Post } from "../../../../shared/models/post";

@Component({
  selector: 'app-post-detail-author',
  templateUrl: './post-detail-author.component.html',
  styleUrls: ['./post-detail-author.component.scss']
})
export class PostDetailAuthorComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit(): void {
  }

}
