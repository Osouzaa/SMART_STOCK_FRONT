import { useState } from "react";
import { TableContainer, Table, Th, Td } from "./styles";

export function DriveStock() {
  const [movements] = useState([
    {
      id: 1,
      product: { id: 1, name: "Notebook Dell", category: "Eletrônicos", price: 4500 },
      quantity: 5,
      type: "entrada",
      createdAt: "2024-02-20T14:30:00Z",
    },
    {
      id: 2,
      product: { id: 2, name: "Teclado Mecânico", category: "Acessórios", price: 250 },
      quantity: 10,
      type: "saida",
      createdAt: "2024-02-21T09:15:00Z",
    },
    {
      id: 3,
      product: { id: 3, name: "Mouse Gamer", category: "Acessórios", price: 180 },
      quantity: 7,
      type: "entrada",
      createdAt: "2024-02-22T16:45:00Z",
    },
    {
      id: 4,
      product: { id: 4, name: "Monitor LG 24''", category: "Eletrônicos", price: 1200 },
      quantity: 3,
      type: "saida",
      createdAt: "2024-02-23T11:10:00Z",
    },
  ]);

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <Th>ID</Th>
            <Th>Produto</Th>
            <Th>Categoria</Th>
            <Th>Quantidade</Th>
            <Th>Tipo</Th>
            <Th>Preço Unitário (R$)</Th>
            <Th>Preço Total (R$)</Th>
            <Th>Data</Th>
          </tr>
        </thead>
        <tbody>
          {movements.map((movement) => (
            <tr key={movement.id}>
              <Td>{movement.id}</Td>
              <Td>{movement.product.name}</Td>
              <Td>{movement.product.category}</Td>
              <Td>{movement.quantity}</Td>
              <Td style={{ color: movement.type === "entrada" ? "green" : "red" }}>
                {movement.type === "entrada" ? "Entrada" : "Saída"}
              </Td>
              <Td>R$ {movement.product.price.toFixed(2)}</Td>
              <Td>R$ {(movement.product.price * movement.quantity).toFixed(2)}</Td>
              <Td>{new Date(movement.createdAt).toLocaleDateString()}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
}
