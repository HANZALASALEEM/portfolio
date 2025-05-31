import { ReactNode } from "react";

interface SkillCompoundProps {
  icon: ReactNode;
  label: string;
}

const SkillCompound = ({ icon, label }: SkillCompoundProps) => {
  return (
    <div className="relative w-40 h-10 cursor-grab">
      <div className="bg-primary shadow-primary rounded-full absolute top-0 left-0 z-[1] w-40 h-10">
        <div className="flex w-full h-full justify-center items-center gap-3">
          {icon}
          <p className="text-white text-lg">{label}</p>
        </div>
      </div>
      <div className="w-40 h-10 border-2 border-dashed border-primary rounded-full absolute top-1 left-1 z-0"></div>
    </div>
  );
};

export default SkillCompound;
