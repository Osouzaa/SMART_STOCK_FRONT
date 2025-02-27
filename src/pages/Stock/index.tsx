import { useQuery } from "@tanstack/react-query";
import { TableContainer, Table, Th, Td } from "./styles";
import { getAllProducts } from "../../api/get-all-products";

export function Stock() {
  const {data: result} = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts
  })

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <Th>Produto</Th>
            <Th>Descrição</Th>
            <Th>Quantidade</Th>
            <Th>Preço (R$)</Th>
            <Th>Preço Total (R$)</Th>
          </tr>
        </thead>
        <tbody>
          {result?.products.map((product) => (
            <tr key={product.id}>
              <Td>{product.name}</Td>
              <Td>{product.description}</Td>
              <Td>{product.quantity}</Td>
              <Td>{product.price.toFixed(2)}</Td>
              <Td>{product.price * product.quantity}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
}
