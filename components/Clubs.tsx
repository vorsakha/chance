interface BetProps {
  data: string[];
  index: number;
}

const Clubs = ({ data, index }: BetProps) => {
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
