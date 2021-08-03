import { useData, useIndex } from "../../context";

export default function Navbar() {
  const { setIndex } = useIndex();
  const { contextData } = useData();

  return (
    <nav>
      {contextData !== null && (
        <ul>
          {contextData[2].clubs.map((club: string[], key: number) => (
            <li key={key}>
              <button onClick={() => setIndex(key)}>
                {club[0]} x {club[1]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
