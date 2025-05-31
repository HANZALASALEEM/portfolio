import Star from "./Star";
import SkillCompound from "./SkillCompound";
import ReactIcon from "../../assets/images/icons/ReactIcon";
import TailwindIcon from "../../assets/images/icons/TailwindIcon";
import HtmlIcon from "../../assets/images/icons/HtmlIcon";
import NextIcon from "../../assets/images/icons/NextIcon";
import TypescriptIcon from "../../assets/images/icons/TypescriptIcon";

const VerticalLanguageDesign = () => {
  return (
    <>
      <Star size={50} />
      <div className="ml-10 -mt-5">
        <SkillCompound icon={<ReactIcon />} label="React.js" />
      </div>
      <div className="ml-20 mt-2">
        <SkillCompound icon={<TailwindIcon />} label="Tailwind CSS" />
      </div>
      <div className="ml-[120px] mt-2">
        <SkillCompound icon={<HtmlIcon />} label="HTML" />
      </div>
      <div className="ml-[270px] -mt-2">
        <Star size={50} />
      </div>
      <div className="ml-[120px] -mt-4">
        <SkillCompound icon={<ReactIcon />} label="React Native" />
      </div>
      <div className="ml-20 mt-2">
        <SkillCompound icon={<NextIcon />} label="Next.js" />
      </div>
      <div className="ml-10 mt-2">
        <SkillCompound icon={<TypescriptIcon />} label="Typescript" />
      </div>
      <div className="-mt-4">
        <Star size={50} />
      </div>
    </>
  );
};

export default VerticalLanguageDesign;
