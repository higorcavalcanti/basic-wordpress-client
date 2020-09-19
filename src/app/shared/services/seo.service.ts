import { Injectable } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { Post } from "../models/post";

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  readonly defaultTitle = 'Basic Wordpress Client';

  constructor(
    private metaService: Meta,
    private titleService: Title,
  ) { }

  setPostMeta(post: Post) {
    const tags = SeoService.getPostTags(post);
    const title = [post?.title, this.defaultTitle].filter(x => x?.length).join(' - ');
    this.metaService.addTags( tags );
    this.titleService.setTitle( title );
  }

  removePostMeta(post: Post) {
    const tags = SeoService.getPostTags(post);
    tags.forEach(tag => {
      const propName = 'property="' + tag.property + '"';
      this.metaService.removeTag( propName );
    });
    this.titleService.setTitle( this.defaultTitle );
  }

  static getPostTags(post: Post): MetaDefinition[] {
    const obj = post?.metas || {};
    return Object.entries( obj ).map(([key, value]) => {
      return {
        property: key,
        content: value?.toString() || ''
      }
    });
  }
}
