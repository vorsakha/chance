import { useIndex } from "../../context";

interface BetProps {
  data: string[];
}

const Clubs = ({ data }: BetProps) => {
  const { index } = useIndex();

  return (
    <>
      {
        <span>
          {data[index][0]} x {data[index][1]}
        </span>
      }
    </>
  );
};

export default Clubs;
