import { useData, useIndex } from "../../context";
import { NavButton, NavContainer, NavList, NavListItem } from "./Nav.styles";

export default function Navbar() {
  const { setIndex } = useIndex();
  const { contextData } = useData();

  return (
    <NavContainer>
      <h1>Chance</h1>
      <p>Campeonato Brasileiro Série A</p>
      {contextData !== null && (
        <NavList>
          {contextData[2].clubs.map((club: string[], key: number) => (
            <NavListItem key={key}>
              <NavButton onClick={() => setIndex(key)}>
                {club[0]} x {club[1]}
              </NavButton>
            </NavListItem>
          ))}
        </NavList>
      )}
    </NavContainer>
  );
}
