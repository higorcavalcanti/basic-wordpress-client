import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { PostsResponse } from "../models/posts-response";

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  protected readonly API_URL = 'https://api.beta.mejorconsalud.com/wp-json/mc/v2/';

  constructor(
    protected http: HttpClient
  ) { }

  posts() {
    return this.http.get<PostsResponse>(this.API_URL + 'posts');
  }
}
