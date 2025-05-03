interface StarProps {
  width: number;
}

const Star = ({ width }: StarProps) => {
  return (
    <div
      className={`w-[${width}px] h-[${width}px] bg-primary border-[2px] border-secondary`}
    >
      <div className="flex">
        <div
          className={`w-[${width / 2}px] h-[${
            width / 2
          }px] bg-secondary rounded-br-full`}
        ></div>
        <div
          className={`w-[${width / 2}px] h-[${
            width / 2
          }px] bg-secondary rounded-bl-full`}
        ></div>
      </div>
      <div className="flex">
        <div
          className={`w-[${width / 2}px] h-[${
            width / 2
          }px] bg-secondary rounded-tr-full`}
        ></div>
        <div
          className={`w-[${width / 2}px] h-[${
            width / 2
          }px] bg-secondary rounded-tl-full`}
        ></div>
      </div>
    </div>
  );
};

export default Star;
