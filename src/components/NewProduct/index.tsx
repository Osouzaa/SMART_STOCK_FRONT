import * as Dialog from "@radix-ui/react-dialog";
import { Content, Overlay, Form, Input, Button } from "./styles";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { createdProduct } from "../../api/created-produtcts";
import { queryClient } from "../../lib/react-query";

export function NewProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);


  const {mutateAsync: createdProductFn} = useMutation({
     mutationFn:  createdProduct,
     onSuccess() {
        queryClient.invalidateQueries({queryKey: ['products']})
     },

  })

  const handleSubmit = async(event: React.FormEvent) => {
    event.preventDefault();
    await createdProductFn({
      name,
      description,
      price,
      quantity
    })
  };

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Adicionar Novo Produto</Dialog.Title>
        <Dialog.Description>Preencha as informações do produto</Dialog.Description>

        <Form onSubmit={handleSubmit}>
          <label>
            Nome do Produto:
            <Input
              type="text"
              placeholder="Nome do produto"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>

          <label>
            Descrição:
            <Input
              type="text"
              placeholder="Descrição do produto"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </label>

          <label>
            Preço:
            <Input
              type="number"
              placeholder="Preço"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              required
            />
          </label>

          <label>
            Quantidade:
            <Input
              type="number"
              placeholder="Quantidade"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              required
            />
          </label>

          <Button type="submit">Salvar</Button>
        </Form>
      </Content>
    </Dialog.Portal>
  );
}
