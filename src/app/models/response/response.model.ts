export class ResponseModel<T> {
  status?: boolean;
  type: string;
  data?: T;
  description?: string;
  length?: number;
  id?: string;
}
