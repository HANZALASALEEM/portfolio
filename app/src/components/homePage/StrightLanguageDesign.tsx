import Star from "./Star";
import SkillCompound from "./SkillCompound";
import ReactIcon from "../../assets/images/icons/ReactIcon";
import TailwindIcon from "../../assets/images/icons/TailwindIcon";
import HtmlIcon from "../../assets/images/icons/HtmlIcon";
import NextIcon from "../../assets/images/icons/NextIcon";
import TypescriptIcon from "../../assets/images/icons/TypescriptIcon";

const StrightLanguageDesign = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="-ml-9">
        <Star size={50} />
      </div>
      <div className="-mt-4">
        <SkillCompound icon={<ReactIcon />} label="React.js" />
      </div>
      <div className="mt-2">
        <SkillCompound icon={<TailwindIcon />} label="Tailwind CSS" />
      </div>
      <div className="mt-2">
        <SkillCompound icon={<HtmlIcon />} label="HTML" />
      </div>
      <div className="mt-2">
        <SkillCompound icon={<ReactIcon />} label="React Native" />
      </div>
      <div className="mt-2">
        <SkillCompound icon={<NextIcon />} label="Next.js" />
      </div>
      <div className="mt-2">
        <SkillCompound icon={<TypescriptIcon />} label="Typescript" />
      </div>
      <div className="-mt-4 self-end -mr-10">
        <Star size={50} />
      </div>
    </div>
  );
};

export default StrightLanguageDesign;
