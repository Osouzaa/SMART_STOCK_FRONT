import * as Dialog from "@radix-ui/react-dialog";
import { Content, Overlay, Form, Input, Button, TypeContainer, TypeButton } from "./styles";
import { useState } from "react";

export function NewMoviment() {
  const [type, setType] = useState<"entrada" | "saida">("entrada");

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova movimentação</Dialog.Title>
        <Dialog.Description>Adicionar nova movimentação</Dialog.Description>

        <Form>
          <label>
            Produto:
            <Input type="text" placeholder="Nome do produto" required />
          </label>

          <label>
            Quantidade:
            <Input type="number" placeholder="Quantidade" required />
          </label>

          <TypeContainer>
            <TypeButton
              isActive={type === "entrada"}
              onClick={() => setType("entrada")}
            >
              Entrada
            </TypeButton>
            <TypeButton
              isActive={type === "saida"}
              onClick={() => setType("saida")}
            >
              Saída
            </TypeButton>
          </TypeContainer>

          <Button type="submit">Salvar</Button>
        </Form>
      </Content>
    </Dialog.Portal>
  );
}
