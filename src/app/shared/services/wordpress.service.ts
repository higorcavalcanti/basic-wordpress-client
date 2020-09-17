import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { PostsResponse } from "../interfaces/posts-response";
import { PostsRequestOptions } from "../interfaces/posts-request-options";
import { Post } from "../models/post";

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  protected readonly API_URL = 'https://api.beta.mejorconsalud.com/wp-json/mc/';

  constructor(
    protected http: HttpClient
  ) { }

  posts(options?: PostsRequestOptions) {
    const params = this.getParams( options );
    return this.http.get<PostsResponse>(this.API_URL + 'v2/posts', { params });
  }

  post(id: string) {
    return this.http.get<Post>(this.API_URL + 'v1/posts/' + id);
  }

  private getParams(options?: PostsRequestOptions): HttpParams {
    let params = new HttpParams();
    if ( options.page ) {
      params = params.append('page', options.page.toString())
    }
    if ( options.search ) {
      params = params.append('search', options.search);
    }
    return params;
  }
}
