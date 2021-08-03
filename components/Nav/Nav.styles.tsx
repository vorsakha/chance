import styled from "styled-components";

interface MobileTypes {
  toggleMobile: boolean;
}

export const NavContainer = styled.nav`
  position: absolute;
  width: 100vw;
  border-right: 1px solid rgba(75, 85, 99, 0.1);
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 1rem;

  h1 {
    font-size: 2.5rem;
    text-transform: uppercase;
  }

  @media screen and (min-width: 768px) {
    width: 250px;
    min-height: 100vh;
  }
`;
export const NavList = styled.ul<MobileTypes>`
  list-style: none;
  padding: 0;
  width: 100%;
  padding: 0 1rem;
  background-color: #f5f4f0;
  display: ${({ toggleMobile }) => (toggleMobile ? "block" : "none")};

  @media screen and (min-width: 768px) {
    padding: 0 1rem;
    display: block;
  }
`;
export const NavListItem = styled.li``;
export const MobileWrapper = styled.div`
  display: block;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
