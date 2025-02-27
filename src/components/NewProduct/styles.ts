import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
`;

export const Content = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: #4caf50;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #43a047;
  }
`;

export const TypeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const TypeButton = styled.button<{ isActive: boolean }>`
  flex: 1;
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  cursor: pointer;
  transition: 0.2s;
  background: ${({ isActive }) => (isActive ? "#4caf50" : "#f5f5f5")};
  color: ${({ isActive }) => (isActive ? "white" : "black")};

  &:hover {
    background: ${({ isActive }) => (isActive ? "#43a047" : "#e0e0e0")};
  }
`;
