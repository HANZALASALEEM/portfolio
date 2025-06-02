interface StarProps {
  size: number;
}

const Star = ({ size }: StarProps) => {
  const half = size / 2;

  return (
    <div style={{ width: size, height: size }} className="bg-primary">
      <div className="flex">
        <div
          style={{ width: half, height: half }}
          className="bg-secondary rounded-br-full"
        ></div>
        <div
          style={{ width: half, height: half }}
          className="bg-secondary rounded-bl-full"
        ></div>
      </div>
      <div className="flex">
        <div
          style={{ width: half, height: half }}
          className="bg-secondary rounded-tr-full"
        ></div>
        <div
          style={{ width: half, height: half }}
          className="bg-secondary rounded-tl-full"
        ></div>
      </div>
    </div>
  );
};

export default Star;
