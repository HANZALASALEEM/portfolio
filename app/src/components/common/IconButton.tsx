import { ReactNode } from "react";

interface IconButtonProps {
  icon: ReactNode;
  label: string;
}

const IconButton = ({ icon, label }: IconButtonProps) => {
  return (
    <button className="group w-[180px] h-10 min-[450px]:h-14 border-[2px] px-2 flex items-center justify-center min-[450px]:justify-between border-primary shadow-primary min-[450px]:border-white min-[450px]:hover:border-primary rounded-full text-primary min-[450px]:text-white hover:bg-primary min-[450px]:hover:bg-secondary hover:text-white min-[450px]:hover:text-primary transition duration-500">
      <div className="flex-1">
        <p>{label}</p>
      </div>
      <div className="hidden min-[450px]:flex h-11 w-11 bg-white group-hover:shadow-primary rounded-full items-center justify-center">
        {icon}
      </div>
    </button>
  );
};

export default IconButton;
