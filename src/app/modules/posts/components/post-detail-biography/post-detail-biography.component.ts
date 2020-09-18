import { Component, Input, OnInit } from '@angular/core';
import { Post } from "../../../../shared/models/post";

@Component({
  selector: 'app-post-detail-biography',
  templateUrl: './post-detail-biography.component.html',
  styleUrls: ['./post-detail-biography.component.scss']
})
export class PostDetailBiographyComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit(): void {
  }

}
