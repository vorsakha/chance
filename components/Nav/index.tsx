import { useState } from "react";
import { useData, useIndex } from "../../context";

// Components
import {
  NavContainer,
  NavList,
  NavListItem,
  MobileWrapper,
  Logo,
} from "./Nav.styles";
import Button from "../common/button";

export default function Navbar() {
  const [toggleMobile, setMobile] = useState<boolean>(false);

  const { setIndex } = useIndex();
  const { contextData } = useData();

  return (
    <NavContainer>
      <h1>
        <Logo />
        Chance
      </h1>
      <p>Campeonato Brasileiro Série A</p>
      <MobileWrapper>
        {!toggleMobile ? (
          <Button onClick={() => setMobile(true)}>Todos os Jogos</Button>
        ) : (
          <Button danger onClick={() => setMobile(false)}>
            X
          </Button>
        )}
      </MobileWrapper>
      {contextData !== null && (
        <NavList toggleMobile={toggleMobile}>
          {contextData[2].clubs.map((club: string[], key: number) => (
            <NavListItem key={key}>
              <Button
                onClick={() => {
                  setIndex(key);
                  setMobile(false);
                }}
              >
                {club[0]} x {club[1]}
              </Button>
            </NavListItem>
          ))}
        </NavList>
      )}
    </NavContainer>
  );
}
