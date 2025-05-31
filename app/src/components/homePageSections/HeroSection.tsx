"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Star from "../homePageComponents/Star";
import SkillCompound from "../homePageComponents/SkillCompound";
import ReactIcon from "../../assets/images/icons/ReactIcon";
import TailwindIcon from "../../assets/images/icons/TailwindIcon";
import HtmlIcon from "../../assets/images/icons/HtmlIcon";
import NextIcon from "../../assets/images/icons/NextIcon";
import TypescriptIcon from "../../assets/images/icons/TypescriptIcon";
import Divider from "../../assets/images/icons/Divider";
import IconButton from "../common/IconButton";
import LikeIcon from "../../assets/images/icons/LikeIcon";
import DownloadIcon from "../../assets/images/icons/DownloadIcon";

const titles = ["HANZALA SALEEM", "Website Developer", "Mobile App Developer"];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="w-full justify-center flex items-center py-3 bg-secondary">
        <div className="w-[90%] flex flex-col lg:flex-row justify-center items-center py-10">
          {/* Left div */}
          <div className="lg:w-1/2 w-[95%] flex flex-col p-2 mt-10 lg:p-5 items-center justify-center">
            <div className={"w-full h-[15vh] sm:h-[10vh] items-center flex"}>
              <AnimatePresence mode="wait">
                <motion.h1
                  key={titles[index]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl text-primary font-bold"
                >
                  {titles[index]}
                </motion.h1>
              </AnimatePresence>
            </div>
            <div className="py-1 w-full items-center flex">
              <p className="text-white text-sm md:text-lg flex flex-wrap">
                I&apos;m Hanzala Saleem, a passionate developer specializing in
                modern web and mobile solutions. With expertise in building
                responsive websites and cross-platform mobile applications, I
                create high-performance digital experiences using technologies
                like React.js, Next.js, and React Native.
              </p>
            </div>
            {/* Buttons */}
            <div className="my-5 w-full flex flex-col items-center justify-center">
              <div className="flex items-center justify-center flex-col shadow-[0_0_10px_rgba(106,53,255,1)] min-[450px]:bg-primary min-[450px]:flex-row min-[450px]:py-2 min-[450px]:px-4 min-[450px]:rounded-full space-y-1 min-[450px]:space-y-0 min-[450px]:space-x-2">
                <IconButton label="Hire Me" icon={<LikeIcon />} />
                <IconButton label="Download CV" icon={<DownloadIcon />} />
              </div>
            </div>
          </div>
          {/* Right div */}
          <div className="lg:w-1/2 w-full flex items-center justify-center">
            <div>
              <Star width={50} />
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
                <Star width={50} />
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
                <Star width={50} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full overflow-hidden">
        <Divider />
      </div>
    </>
  );
};

export default HeroSection;
