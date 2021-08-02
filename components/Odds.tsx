interface BetProps {
  data: [number, number, number][];
  index: number;
}

const Odds = ({ data, index }: BetProps) => {
  return (
    <>
      <div>
        {data[index][0]} | {data[index][1]} | {data[index][2]}
      </div>
    </>
  );
};

export default Odds;
