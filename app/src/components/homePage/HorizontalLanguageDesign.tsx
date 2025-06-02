import HtmlIcon from "../../assets/images/icons/HtmlIcon";
import NextIcon from "../../assets/images/icons/NextIcon";
import ReactIcon from "../../assets/images/icons/ReactIcon";
import TailwindIcon from "../../assets/images/icons/TailwindIcon";
import TypescriptIcon from "../../assets/images/icons/TypescriptIcon";
import SkillCompound from "./SkillCompound";
import Star from "./Star";

const HorizontalLanguageDesign = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex w-[475px] items-center justify-between">
        <Star size={50} />
        <Star size={50} />
      </div>
      <div className="flex w-[400px] -mt-4 items-center justify-between">
        <SkillCompound icon={<ReactIcon />} label="React.js" />
        <SkillCompound icon={<TypescriptIcon />} label="Typescript" />
      </div>
      <div className="flex w-[370px] mt-3 items-center justify-between">
        <SkillCompound icon={<TailwindIcon />} label="Tailwind CSS" />
        <SkillCompound icon={<NextIcon />} label="Next.js" />
      </div>
      <div className="flex w-[340px] mt-3 items-center justify-between">
        <SkillCompound icon={<HtmlIcon />} label="HTML" />
        <SkillCompound icon={<ReactIcon />} label="React Native" />
      </div>
      <div className="flex w-[370px] -mt-3 items-center justify-center">
        <Star size={50} />
      </div>
    </div>
  );
};

export default HorizontalLanguageDesign;
