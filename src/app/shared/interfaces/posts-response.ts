import { Post } from "../models/post";
import { PagedResponse } from "./paged-response";

export interface PostsResponse extends PagedResponse<Post> {

}
