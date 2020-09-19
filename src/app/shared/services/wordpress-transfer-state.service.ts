import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { WordpressService } from "./wordpress.service";
import { HttpClient } from "@angular/common/http";
import { makeStateKey, TransferState } from "@angular/platform-browser";
import { PostsRequestOptions } from "../interfaces/posts-request-options";
import { Post } from "../models/post";
import { PostsResponse } from "../interfaces/posts-response";
import { Observable, of } from "rxjs";
import { tap, timeout } from "rxjs/operators";
import { isPlatformServer } from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class WordpressTransferStateService extends WordpressService {

  constructor(
    protected http: HttpClient,
    protected transferState: TransferState,
    @Inject(PLATFORM_ID) private platformId,
  ) {
    super(http);
  }


  posts(options: PostsRequestOptions) {
    const key = Object.entries( options ).map(([key, value]) => {
      if ( key && value ) {
        return [key, value].join('-');
      }
      return '';
    }).join('|');
    const KEY = makeStateKey<Post>('posts-' + key);

    if (this.transferState.hasKey(KEY)) {
      const posts = this.transferState.get<PostsResponse>(KEY, null);
      this.transferState.remove(KEY);
      return of(posts);
    }
    return this.applyPipes(super.posts(options), KEY);
  }

  post(id: string) {
    const KEY = makeStateKey<Post>('post-' + id);

    if (this.transferState.hasKey(KEY)) {
      const post = this.transferState.get<Post>(KEY, null);
      this.transferState.remove(KEY);
      return of(post);
    }
    return this.applyPipes(super.post(id), KEY);
  }

  private applyPipes<T>(observable: Observable<T>, KEY): Observable<T> {
    return observable.pipe(
      timeout(5000),
      tap(post => {
        if (isPlatformServer(this.platformId)) {
          this.transferState.set(KEY, post);
        }
      })
    )
  }
}
