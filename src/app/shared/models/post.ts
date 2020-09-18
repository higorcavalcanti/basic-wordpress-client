import { Category } from "./category";
import { PostFeaturedMedia } from "./post-featured-media";
import { PostAuthor } from "./post-author";

export interface Post {
  id: number | string;
  slug: string;
  link: string;
  permalink: string;

  title: string;
  headline: string;
  excerpt: string;
  content: string;
  bibliography: string;

  published: string;
  modified: string;

  featured_media: PostFeaturedMedia;
  author: PostAuthor;

  categories: Category[];
}
