export interface ResultOutput<T> {
  success?: boolean;
  data?: T;
  message?: string;
}
