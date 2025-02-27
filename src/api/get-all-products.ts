import { api } from "../lib/axios";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  createdAt: string;
}

interface GetAllProductsResponse {
  products: Product[];
  total: number;
  totalPrice: number;
}

export async function getAllProducts(): Promise<GetAllProductsResponse> {
  const response = await api.get<GetAllProductsResponse>('/products');
  return response.data;
}
