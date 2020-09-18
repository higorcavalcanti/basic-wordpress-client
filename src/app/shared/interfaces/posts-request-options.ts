import { PostOrderbyEnum } from "./post-orderby.enum";

export class PostsRequestOptions {
  search?: string;
  page?: number;

  orderby?: PostOrderbyEnum;
}
