import { useIndex } from "../../context";

interface BetProps {
  data: [number, number, number][];
}

const Odds = ({ data }: BetProps) => {
  const { index } = useIndex();

  return (
    <>
      {data[index] !== null && (
        <div>
          {data[index][0]} | {data[index][1]} | {data[index][2]}
        </div>
      )}
    </>
  );
};

export default Odds;
