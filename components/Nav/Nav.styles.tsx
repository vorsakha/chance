import styled from "styled-components";

export const NavContainer = styled.nav`
  position: absolute;
  width: 250px;
  min-height: 100vh;
  border-right: 1px solid rgba(75, 85, 99, 0.1);
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 2.5rem;
    text-transform: uppercase;
  }
`;
export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: auto;
`;
export const NavListItem = styled.li``;
export const NavButton = styled.button`
  background-color: dodgerblue;
  border: none;
  color: #fff;
  padding: 10px 1rem;
  margin: 3px 0;
  cursor: pointer;
  transition: background-color ease-in;

  :hover {
    background-color: #1b75d0;
  }
`;
