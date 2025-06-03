"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Divider from "../../assets/images/icons/Divider";
import IconButton from "../../components/common/IconButton";
import LikeIcon from "../../assets/images/icons/LikeIcon";
import DownloadIcon from "../../assets/images/icons/DownloadIcon";
import VerticalLanguageDesign from "../../components/homePage/VerticalLanguageDesign";
import HorizontalLanguageDesign from "../../components/homePage/HorizontalLanguageDesign";
import StrightLanguageDesign from "../../components/homePage/StrightLanguageDesign";
import AboutSection from "./AboutSection";

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
            <div
              className={
                "w-full h-[15vh] sm:h-[10vh] items-center justify-center flex"
              }
            >
              <AnimatePresence mode="wait">
                <motion.h1
                  key={titles[index]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="text-5xl text-center text-primary font-bold"
                >
                  {titles[index]}
                </motion.h1>
              </AnimatePresence>
            </div>
            {/* Buttons */}
            <div className="my-5 w-full flex flex-col items-center justify-center">
              <div className="flex items-center justify-center flex-col min-[450px]:shadow-[0_0_10px_rgba(106,53,255,1)] min-[450px]:bg-primary min-[450px]:flex-row min-[450px]:py-2 min-[450px]:px-4 min-[450px]:rounded-full space-y-1 min-[450px]:space-y-0 min-[450px]:space-x-2">
                <IconButton label="Hire Me" icon={<LikeIcon />} />
                <IconButton label="Download CV" icon={<DownloadIcon />} />
              </div>
            </div>
          </div>
          {/* Right div */}
          <div className="lg:w-1/2 w-full flex items-center justify-center">
            {/* Show on large screens */}
            <div className="hidden lg:block">
              <VerticalLanguageDesign />
            </div>

            {/* Show on medium screens */}
            <div className="hidden sm:block lg:hidden">
              <HorizontalLanguageDesign />
            </div>

            {/* Show on small screens */}
            <div className="block sm:hidden">
              <StrightLanguageDesign />
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full overflow-hidden">
        <Divider />
      </div>

      {/* About Me */}
      <AboutSection />
    </>
  );
};

export default HeroSection;
