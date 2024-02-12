export interface apiResponse<T> {
  status: number;
  statusText: string;
  data: T;
  url: string;
}
