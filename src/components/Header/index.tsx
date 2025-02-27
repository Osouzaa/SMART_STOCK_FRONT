import { NewMoviment } from "../NewMoviment";
import { HeaderContainer, HeaderContent, Nav, Link } from "./styles";
import * as Dialog from "@radix-ui/react-dialog"


export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <p>Logo</p>

        <Nav>
          <ul>
            <Link to="/">Dashboard</Link>
            <Link to="/stock">Estoque</Link>
            <Link to="/drive">Movimentações</Link>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button>Nova movimentação</button>
              </Dialog.Trigger>
              <NewMoviment />
            </Dialog.Root>
          </ul>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
}
