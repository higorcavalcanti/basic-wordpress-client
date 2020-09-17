import { Component, OnInit } from '@angular/core';
import { WordpressService } from "../../../../shared/services/wordpress.service";
import { Post } from "../../../../shared/models/post";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: Post[];

  constructor(
    private wordpressService: WordpressService
  ) { }

  ngOnInit(): void {
    this.wordpressService.posts().subscribe(response => {
      console.log(response);
      this.posts = response.data;
    });
  }

}
