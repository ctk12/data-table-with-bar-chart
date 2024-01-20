import { client } from '../utils/fetchClient';
import { ApiResponse } from '@/types/Product';

const apiPath = "products"; 

export const getProducts = (params: string) => {
  return client.get<ApiResponse>(`/${apiPath}${params}`);
};