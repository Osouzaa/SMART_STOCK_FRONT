import { TableContainer, Table, Th, Td } from "./styles";

export function Stock() {
  const products = [
    { id: 1, name: "Notebook Dell", category: "Eletrônicos", quantity: 15, price: 4500 },
    { id: 2, name: "Teclado Mecânico", category: "Acessórios", quantity: 30, price: 250 },
    { id: 3, name: "Mouse Gamer", category: "Acessórios", quantity: 20, price: 180 },
    { id: 4, name: "Monitor LG 24''", category: "Eletrônicos", quantity: 10, price: 1200 },
  ];

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <Th>ID</Th>
            <Th>Produto</Th>
            <Th>Categoria</Th>
            <Th>Quantidade</Th>
            <Th>Preço (R$)</Th>
            <Th>Preço Total (R$)</Th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <Td>{product.id}</Td>
              <Td>{product.name}</Td>
              <Td>{product.category}</Td>
              <Td>{product.quantity}</Td>
              <Td>R$ {product.price.toFixed(2)}</Td>
              <Td>R$ {product.price * product.quantity}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
}
