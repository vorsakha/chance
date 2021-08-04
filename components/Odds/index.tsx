import { useIndex } from "../../context";

interface BetProps {
  data: [number, number, number][];
}

const Odds = ({ data }: BetProps) => {
  const { index } = useIndex();

  return (
    <>
      {data[index] !== null && (
        <tr>
          <td>{data[index][0]}</td>
          <td>{data[index][1]}</td>
          <td>{data[index][2]}</td>
        </tr>
      )}
    </>
  );
};

export default Odds;
