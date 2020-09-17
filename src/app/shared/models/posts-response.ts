import { Post } from "./post";

export interface PostsResponse {
  data: Post[];
  size: number;
  pages: number;
}
