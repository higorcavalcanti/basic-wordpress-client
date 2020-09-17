import { Component, Input, OnInit } from '@angular/core';
import { Post } from "../../../../shared/models/post";

@Component({
  selector: 'app-post-list-post',
  templateUrl: './post-list-post.component.html',
  styleUrls: ['./post-list-post.component.scss']
})
export class PostListPostComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit(): void {
  }

}