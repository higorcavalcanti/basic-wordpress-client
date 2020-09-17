export interface PagedResponse<T> {
  data: T[];
  size: number;
  pages: number;
}
