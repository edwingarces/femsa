import { ItemType } from './products';

export interface HookResponse {
  data: ItemType[];
  status: number;
}

export interface ReturnedValues<T> {
  response: null | T | HookResponse;
  execCall: (params: null | URLSearchParams, callUrl: null | string) => void;
  error: boolean;
}
