import { Category } from "./category";

export interface Post {
  id: number | string;
  slug: string;
  link: string;
  permalink: string;
  title: string;
  headline: string;
  excerpt: string;

  published: string;
  modified: string;

  featured_media: {
    [s: string]: string
  };

  categories: Category[];
}
