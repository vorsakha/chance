import styled from "styled-components";

const Button = styled.button`
  width: 100%;
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

export default Button;
