import { NavLink } from "react-router";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100vw;
  background-color: #313131;
  color: #fff;
  padding: 0 20px;
`;

export const HeaderContent = styled.div`
  max-width: 1400px;
  height: 80px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    align-items: center;
    gap: 20px;
    list-style: none;
    margin: 0;
    padding: 0;

    button {
      background-color: #f1c40f;
      border: none;
      padding: 8px 16px;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: background 0.3s ease;

      &:hover {
        background-color: #d4ac0d;
      }
    }
  }
`;

export const Link = styled(NavLink)`
  cursor: pointer;
  transition: color 0.3s ease;
  text-decoration: none;
  color: #FFF;


  &:hover {
    color: #f1c40f;
  }

  &.active {
    color: #f1c40f;
  }
`