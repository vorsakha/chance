import styled from "styled-components";

interface ButtonTypes {
  danger?: boolean;
}

const Button = styled.button<ButtonTypes>`
  width: 100%;
  background-color: ${({ danger }) => (danger ? "#eb4f4f" : "dodgerblue")};
  border: none;
  color: #fff;
  padding: 10px 1rem;
  margin: 3px 0;
  cursor: pointer;
  transition: background-color ease-in;

  :hover {
    background-color: ${({ danger }) => (danger ? "#ce4343" : "#1b75d0")};
  }
`;

export default Button;
