import styled from "styled-components";

const Container = styled.div`
  padding: 0 1rem;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    margin-left: 250px;
    width: calc(1000px - 250px);
  }
`;

export default Container;
