import { api } from "../lib/axios"

interface CreatedProductsProps {
  "name": string,
	"description": string,
	"price": number,
	"quantity": number
}

export async function createdProduct({
  name,
  price,
  description,
  quantity
}:CreatedProductsProps) {
  await api.post('/products', {
    name,
    price,
    description,
    quantity
  })
}