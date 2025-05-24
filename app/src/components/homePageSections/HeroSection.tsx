"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from 'next/dynamic';

const Star = dynamic(() => import('../homePageComponents/Star'), { ssr: false });
const SkillCompound = dynamic(() => import('../homePageComponents/SkillCompound'), { ssr: false });
const AnimatedParagraph = dynamic(() => import('../common/AnimatedParagraph'), { ssr: false });

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
          <div className="lg:w-1/2 w-[95%] flex flex-col p-2 mt-10 lg:p-5 h-[500px] items-center justify-center">
              <div className="w-full items-center flex">

            <p className="text-4xl text-white">Hi, I’m</p>
              </div>
            <div className={"w-full h-[15vh] sm:h-[10vh] items-center flex"}>
            <AnimatePresence mode="wait" >
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
<div className="h-[65px] w-full items-center flex">

            <AnimatedParagraph text={"2 years of experience building modern applications using React.js, Next.js, Node.js, TailwindCSS, and React Native."}/>
</div>
            {/* Buttons */}
            <div className="my-5 w-full flex flex-col items-center justify-center">
                <div className="flex items-center justify-center flex-col min-[450px]:bg-primary min-[450px]:flex-row min-[450px]:py-2 min-[450px]:px-4 min-[450px]:rounded-full space-y-1 min-[450px]:space-y-0 min-[450px]:space-x-2">
              <button className="w-[150px] h-10 border-[2px] border-primary min-[450px]:border-secondary rounded-full text-primary min-[450px]:text-secondary hover:bg-primary min-[450px]:hover:bg-secondary hover:text-white min-[450px]:hover:text-primary transition duration-500">
                <p>Hire Me</p>
              </button>
              <button className="w-[150px] h-10 border-[2px] border-primary min-[450px]:border-secondary rounded-full text-primary min-[450px]:text-secondary hover:bg-primary min-[450px]:hover:bg-secondary hover:text-white min-[450px]:hover:text-primary transition duration-500">
                Download CV
              </button>
                </div>
            </div>
          </div>
          {/* Right div */}
          <div className="lg:w-1/2 w-full flex items-center justify-center h-[500px]">
              <div>
              <Star width={50} />
                  <motion.div className="ml-10 -mt-5"
                              initial={{ opacity: 0, x: 20 }}
                       animate={{ opacity: 1, x: 0 }}
                       transition={{ duration: 0.5, delay: 0.5 }}>
                <SkillCompound
                  icon={
                    <svg
                      className="w-6 h-6 text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21.718 12c0-1.429-1.339-2.681-3.467-3.5.029-.18.077-.37.1-.545.217-2.058-.273-3.543-1.379-4.182-1.235-.714-2.983-.186-4.751 1.239C10.45 3.589 8.7 3.061 7.468 3.773c-1.107.639-1.6 2.124-1.379 4.182.018.175.067.365.095.545-2.127.819-3.466 2.071-3.466 3.5 0 1.429 1.339 2.681 3.466 3.5-.028.18-.077.37-.095.545-.218 2.058.272 3.543 1.379 4.182.376.213.803.322 1.235.316a5.987 5.987 0 0 0 3.514-1.56 5.992 5.992 0 0 0 3.515 1.56 2.44 2.44 0 0 0 1.236-.316c1.106-.639 1.6-2.124 1.379-4.182-.019-.175-.067-.365-.1-.545 2.132-.819 3.471-2.071 3.471-3.5Zm-6.01-7.548a1.5 1.5 0 0 1 .76.187c.733.424 1.055 1.593.884 3.212-.012.106-.043.222-.058.33-.841-.243-1.7-.418-2.57-.523a16.165 16.165 0 0 0-1.747-1.972 4.9 4.9 0 0 1 2.731-1.234Zm-7.917 8.781c.172.34.335.68.529 1.017.194.337.395.656.6.969a14.09 14.09 0 0 1-1.607-.376 14.38 14.38 0 0 1 .478-1.61Zm-.479-4.076a14.085 14.085 0 0 1 1.607-.376c-.205.313-.405.634-.6.969-.195.335-.357.677-.529 1.017-.19-.527-.35-1.064-.478-1.61ZM8.3 12a19.32 19.32 0 0 1 .888-1.75c.33-.568.69-1.118 1.076-1.65.619-.061 1.27-.1 1.954-.1.684 0 1.333.035 1.952.1a19.63 19.63 0 0 1 1.079 1.654c.325.567.621 1.15.887 1.746a18.869 18.869 0 0 1-1.953 3.403 19.218 19.218 0 0 1-3.931 0 20.169 20.169 0 0 1-1.066-1.653A19.324 19.324 0 0 1 8.3 12Zm7.816 2.25c.2-.337.358-.677.53-1.017.191.527.35 1.065.478 1.611a14.48 14.48 0 0 1-1.607.376c.202-.314.404-.635.597-.97h.002Zm.53-3.483c-.172-.34-.335-.68-.53-1.017a20.214 20.214 0 0 0-.6-.97c.542.095 1.078.22 1.606.376a14.111 14.111 0 0 1-.478 1.611h.002ZM12.217 6.34c.4.375.777.773 1.13 1.193-.37-.02-.746-.033-1.129-.033s-.76.013-1.131.033c.353-.42.73-.817 1.13-1.193Zm-4.249-1.7a1.5 1.5 0 0 1 .76-.187 4.9 4.9 0 0 1 2.729 1.233A16.253 16.253 0 0 0 9.71 7.658c-.87.105-1.728.28-2.569.524-.015-.109-.047-.225-.058-.331-.171-1.619.151-2.787.885-3.211ZM3.718 12c0-.9.974-1.83 2.645-2.506.218.857.504 1.695.856 2.506-.352.811-.638 1.65-.856 2.506C4.692 13.83 3.718 12.9 3.718 12Zm4.25 7.361c-.734-.423-1.056-1.593-.885-3.212.011-.106.043-.222.058-.331.84.243 1.697.418 2.564.524a16.37 16.37 0 0 0 1.757 1.982c-1.421 1.109-2.714 1.488-3.494 1.037Zm3.11-2.895c.374.021.753.034 1.14.034.387 0 .765-.013 1.139-.034a14.4 14.4 0 0 1-1.14 1.215 14.248 14.248 0 0 1-1.139-1.215Zm5.39 2.895c-.782.451-2.075.072-3.5-1.038a16.248 16.248 0 0 0 1.757-1.981 16.41 16.41 0 0 0 2.565-.523c.015.108.046.224.058.33.175 1.619-.148 2.789-.88 3.212Zm1.6-4.854A16.563 16.563 0 0 0 17.216 12c.352-.812.638-1.65.856-2.507 1.671.677 2.646 1.607 2.646 2.507 0 .9-.975 1.83-2.646 2.507h-.004Z" />
                      <path d="M12.215 13.773a1.792 1.792 0 1 0-1.786-1.8v.006a1.787 1.787 0 0 0 1.786 1.794Z" />
                    </svg>
                  }
                  label="React.js"
                />
              </motion.div>
              <motion.div className="ml-20 mt-2"
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.5, delay: 1.5 }}>
                <SkillCompound
                  icon={
                    <svg
                      className="w-6 h-6 text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.782 5.72a4.773 4.773 0 0 0-4.8 4.173 3.43 3.43 0 0 1 2.741-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.934-2.865 3.137-3.921-.969 1.379-2.44 2.207-4.259 1.231-1.253-.673-2.19-3.438-5.959-3.318ZM6.8 11.979A4.772 4.772 0 0 0 2 16.151a3.431 3.431 0 0 1 2.745-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.933-2.865 3.137-3.921-.97 1.379-2.44 2.208-4.259 1.231-1.253-.673-2.19-3.443-5.963-3.317Z" />
                    </svg>
                  }
                  label="Tailwind CSS"
                />
              </motion.div>
              <motion.div className="ml-[120px] mt-2" initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.5, delay: 2.5 }}>
                <SkillCompound
                    icon={
                      <svg
                          className="w-6 h-6 text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                      >
                        <path d="m3 2 1.578 17.824L12 22l7.467-2.175L21 2H3Zm14.049 6.048H9.075l.172 2.016h7.697l-.626 6.565-4.246 1.381-4.281-1.455-.288-2.932h2.024l.16 1.411 2.4.815 2.346-.763.297-3.005H7.416l-.562-6.05h10.412l-.217 2.017Z" />
                      </svg>
                    }
                    label="HTML"
                />
              </motion.div>
                  <div className="ml-[270px] -mt-2">
                      <Star width={50} />
                  </div>
                  <motion.div className="ml-[120px] -mt-4" initial={{ opacity: 0, x: 20 }}
                       animate={{ opacity: 1, x: 0 }}
                       transition={{ duration: 0.5, delay: 2.5 }}>
                      <SkillCompound
                          icon={
                              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                   xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                   viewBox="0 0 24 24">
                                  <path
                                      d="M21.718 12c0-1.429-1.339-2.681-3.467-3.5.029-.18.077-.37.1-.545.217-2.058-.273-3.543-1.379-4.182-1.235-.714-2.983-.186-4.751 1.239C10.45 3.589 8.7 3.061 7.468 3.773c-1.107.639-1.6 2.124-1.379 4.182.018.175.067.365.095.545-2.127.819-3.466 2.071-3.466 3.5 0 1.429 1.339 2.681 3.466 3.5-.028.18-.077.37-.095.545-.218 2.058.272 3.543 1.379 4.182.376.213.803.322 1.235.316a5.987 5.987 0 0 0 3.514-1.56 5.992 5.992 0 0 0 3.515 1.56 2.44 2.44 0 0 0 1.236-.316c1.106-.639 1.6-2.124 1.379-4.182-.019-.175-.067-.365-.1-.545 2.132-.819 3.471-2.071 3.471-3.5Zm-6.01-7.548a1.5 1.5 0 0 1 .76.187c.733.424 1.055 1.593.884 3.212-.012.106-.043.222-.058.33-.841-.243-1.7-.418-2.57-.523a16.165 16.165 0 0 0-1.747-1.972 4.9 4.9 0 0 1 2.731-1.234Zm-7.917 8.781c.172.34.335.68.529 1.017.194.337.395.656.6.969a14.09 14.09 0 0 1-1.607-.376 14.38 14.38 0 0 1 .478-1.61Zm-.479-4.076a14.085 14.085 0 0 1 1.607-.376c-.205.313-.405.634-.6.969-.195.335-.357.677-.529 1.017-.19-.527-.35-1.064-.478-1.61ZM8.3 12a19.32 19.32 0 0 1 .888-1.75c.33-.568.69-1.118 1.076-1.65.619-.061 1.27-.1 1.954-.1.684 0 1.333.035 1.952.1a19.63 19.63 0 0 1 1.079 1.654c.325.567.621 1.15.887 1.746a18.869 18.869 0 0 1-1.953 3.403 19.218 19.218 0 0 1-3.931 0 20.169 20.169 0 0 1-1.066-1.653A19.324 19.324 0 0 1 8.3 12Zm7.816 2.25c.2-.337.358-.677.53-1.017.191.527.35 1.065.478 1.611a14.48 14.48 0 0 1-1.607.376c.202-.314.404-.635.597-.97h.002Zm.53-3.483c-.172-.34-.335-.68-.53-1.017a20.214 20.214 0 0 0-.6-.97c.542.095 1.078.22 1.606.376a14.111 14.111 0 0 1-.478 1.611h.002ZM12.217 6.34c.4.375.777.773 1.13 1.193-.37-.02-.746-.033-1.129-.033s-.76.013-1.131.033c.353-.42.73-.817 1.13-1.193Zm-4.249-1.7a1.5 1.5 0 0 1 .76-.187 4.9 4.9 0 0 1 2.729 1.233A16.253 16.253 0 0 0 9.71 7.658c-.87.105-1.728.28-2.569.524-.015-.109-.047-.225-.058-.331-.171-1.619.151-2.787.885-3.211ZM3.718 12c0-.9.974-1.83 2.645-2.506.218.857.504 1.695.856 2.506-.352.811-.638 1.65-.856 2.506C4.692 13.83 3.718 12.9 3.718 12Zm4.25 7.361c-.734-.423-1.056-1.593-.885-3.212.011-.106.043-.222.058-.331.84.243 1.697.418 2.564.524a16.37 16.37 0 0 0 1.757 1.982c-1.421 1.109-2.714 1.488-3.494 1.037Zm3.11-2.895c.374.021.753.034 1.14.034.387 0 .765-.013 1.139-.034a14.4 14.4 0 0 1-1.14 1.215 14.248 14.248 0 0 1-1.139-1.215Zm5.39 2.895c-.782.451-2.075.072-3.5-1.038a16.248 16.248 0 0 0 1.757-1.981 16.41 16.41 0 0 0 2.565-.523c.015.108.046.224.058.33.175 1.619-.148 2.789-.88 3.212Zm1.6-4.854A16.563 16.563 0 0 0 17.216 12c.352-.812.638-1.65.856-2.507 1.671.677 2.646 1.607 2.646 2.507 0 .9-.975 1.83-2.646 2.507h-.004Z"/>
                                  <path
                                      d="M12.215 13.773a1.792 1.792 0 1 0-1.786-1.8v.006a1.787 1.787 0 0 0 1.786 1.794Z"/>
                              </svg>

                          }
                          label="React Native"
                      />
                  </motion.div>
                  <motion.div className="ml-20 mt-2" initial={{ opacity: 0, x: 20 }}
                       animate={{ opacity: 1, x: 0 }}
                       transition={{ duration: 0.5, delay: 1.5 }}>
                      <SkillCompound
                          icon={
                              <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <g clipPath="url(#clip0)">
                                      <path d="M11.2141 0.00645944C11.1625 0.0111515 10.9982 0.0275738 10.8504 0.039304C7.44164 0.346635 4.24868 2.18593 2.22639 5.01291C1.10029 6.58476 0.380059 8.36775 0.107918 10.2563C0.0117302 10.9156 0 11.1103 0 12.0041C0 12.898 0.0117302 13.0927 0.107918 13.7519C0.760117 18.2587 3.96716 22.0452 8.31672 23.4481C9.0956 23.6991 9.91672 23.8704 10.8504 23.9736C11.2141 24.0135 12.7859 24.0135 13.1496 23.9736C14.7613 23.7953 16.1267 23.3965 17.4733 22.7091C17.6798 22.6035 17.7196 22.5754 17.6915 22.5519C17.6727 22.5378 16.793 21.3578 15.7372 19.9314L13.8182 17.339L11.4135 13.7801C10.0903 11.8235 9.00176 10.2235 8.99238 10.2235C8.98299 10.2211 8.97361 11.8024 8.96891 13.7331C8.96188 17.1138 8.95953 17.2499 8.9173 17.3296C8.85631 17.4446 8.80938 17.4915 8.71085 17.5431C8.63578 17.5807 8.57009 17.5877 8.21584 17.5877H7.80997L7.70205 17.5197C7.63167 17.4751 7.58006 17.4164 7.54487 17.3484L7.4956 17.2428L7.50029 12.539L7.50733 7.83285L7.58006 7.74136C7.6176 7.69209 7.69736 7.62875 7.75367 7.59825C7.84985 7.55133 7.88739 7.54664 8.29325 7.54664C8.77185 7.54664 8.85161 7.5654 8.97595 7.70147C9.01114 7.73901 10.3132 9.7003 11.871 12.0628C13.4287 14.4252 15.5589 17.651 16.6053 19.2346L18.5056 22.1132L18.6018 22.0499C19.4534 21.4962 20.3543 20.7079 21.0674 19.8868C22.5853 18.1437 23.5636 16.0182 23.8921 13.7519C23.9883 13.0927 24 12.898 24 12.0041C24 11.1103 23.9883 10.9156 23.8921 10.2563C23.2399 5.74957 20.0328 1.96306 15.6833 0.560125C14.9161 0.311445 14.0997 0.140184 13.1848 0.036958C12.9595 0.0134976 11.4088 -0.0123089 11.2141 0.00645944ZM16.1267 7.26511C16.2393 7.32142 16.3308 7.42933 16.3636 7.54194C16.3824 7.60294 16.3871 8.90734 16.3824 11.8469L16.3754 16.0651L15.6317 14.9249L14.8856 13.7848V10.7185C14.8856 8.73608 14.895 7.62171 14.9091 7.56775C14.9466 7.43637 15.0287 7.33315 15.1413 7.27215C15.2375 7.22288 15.2727 7.21819 15.6411 7.21819C15.9883 7.21819 16.0493 7.22288 16.1267 7.26511Z" fill="#ffffff"/>
                                  </g>
                                  <defs>
                                      <clipPath id="clip0">
                                          <rect width="24" height="24" fill="white"/>
                                      </clipPath>
                                  </defs>
                              </svg>
                          }
                          label="Next.js"
                      />
                  </motion.div>
                  <motion.div className="ml-10 mt-2" initial={{ opacity: 0, x: 20 }}
                       animate={{ opacity: 1, x: 0 }}
                       transition={{ duration: 0.5, delay: 0.5 }}>
                      <SkillCompound
                          icon={
                              <svg fill="#ffffff" width="24px" height="24px" viewBox="0 0 14 14" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="m 0.9999998,7.0000066 0,5.9999944 12.0000002,0 0,-12.00000195 -12.0000002,0 0,6.00000755 z m 7.359375,-0.2109464 0,0.5390661 -1.546875,0 0,4.9218757 -1.265625,0 0,-4.9218757 -1.5468751,0 0,-1.078119 4.3593751,0 0,0.5390529 z M 11.40625,6.3156206 c 0.192187,0.037467 0.407812,0.089067 0.482812,0.1171999 l 0.126563,0.0516 0,0.5859327 c 0,0.3234397 -0.0094,0.5859328 -0.01875,0.5859328 -0.0094,0 -0.107812,-0.0516 -0.220312,-0.1125332 -0.421875,-0.2390665 -1.096875,-0.328133 -1.509375,-0.2062532 -0.09844,0.028133 -0.24375,0.1171999 -0.31875,0.1921865 -0.1124998,0.1078666 -0.1359374,0.1734399 -0.1359374,0.3468797 0,0.1874932 0.023437,0.2390664 0.178125,0.384373 0.098437,0.093733 0.4640624,0.3093731 0.8203124,0.4875062 0.75,0.3703064 1.129687,0.6843726 1.303125,1.0734256 0.154687,0.3468794 0.159375,1.0781324 0.0094,1.4062524 -0.140625,0.309373 -0.45,0.623439 -0.754687,0.768759 -0.646875,0.30468 -1.7015627,0.332813 -2.5265627,0.06093 l -0.2953125,-0.0984 0,-1.303119 0.2343751,0.168747 c 0.3046604,0.220306 0.6984105,0.356253 1.1109105,0.384373 0.4124996,0.02813 0.7171876,-0.04693 0.9046876,-0.225 0.117188,-0.107866 0.140625,-0.168746 0.140625,-0.346879 0,-0.342187 -0.196875,-0.520307 -1.0031252,-0.9140529 C 9.2218738,9.371911 8.9968739,9.2125379 8.7859364,8.9031649 8.3171864,8.2234721 8.4578113,7.1828598 9.0859363,6.7094202 9.6203113,6.3016073 10.506249,6.1516074 11.406249,6.3156606 Z"/></svg>
                          }
                          label="Typescript"
                      />
                  </motion.div>
                  <div className="-mt-4">
                      <Star width={50}/>
                  </div>
              </div>
          </div>
        </div>
      </div>

        {/* Divider */}
        {/* <div className="w-full h-20 bg-secondary rounded-bl-[150px] rounded-br-[-150px]"></div> */}
        <div className="w-full overflow-hidden">
            <svg
                className="w-full h-20"
                viewBox="0 0 1440 100"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path fill="#2c2c2c" d="M0,0 C180,200 360,0 1440,90 L1440,0 L0,0 Z"/>
            </svg>
        </div>
    </>
  );
};

export default HeroSection;
// "use client";
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import dynamic from 'next/dynamic';
//
// const Star = dynamic(() => import('../homePageComponents/Star'), { ssr: false });
// const SkillCompound = dynamic(() => import('../homePageComponents/SkillCompound'), { ssr: false });
// const AnimatedParagraph = dynamic(() => import('../common/AnimatedParagraph'), { ssr: false });
//
// const titles = ["HANZALA SALEEM", "Website Developer", "Mobile App Developer"];
//
// const HeroSection = () => {
//   const [index, setIndex] = useState(0);
//
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % titles.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, []);
//
//   return (
//       <>
//         {/* Hero Section */}
//         <div className="w-full justify-center flex items-center py-3 bg-secondary">
//           <div className="w-[90%] flex flex-col lg:flex-row justify-center items-center">
//             {/* Left div - Text Content */}
//             <div className="lg:w-1/2 w-[95%] flex flex-col p-2 mt-10 lg:p-5">
//               <p className="text-4xl text-white">Hi, I'm</p>
//               <div className="w-full h-[15vh] sm:h-[10vh] items-center flex">
//                 <AnimatePresence mode="wait">
//                   <motion.h1
//                       key={titles[index]}
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -10 }}
//                       transition={{ duration: 0.5 }}
//                       className="text-4xl text-primary font-bold"
//                   >
//                     {titles[index]}
//                   </motion.h1>
//                 </AnimatePresence>
//               </div>
//
//               <AnimatedParagraph text="2 years of experience building modern applications using React.js, Next.js, Node.js, TailwindCSS, and React Native." />
//
//               {/* Buttons */}
//               <div className="my-5 flex flex-col sm:flex-row items-center justify-center sm:justify-evenly">
//                 <button className="w-[150px] h-10 border-[2px] border-primary rounded-full text-primary my-2 hover:bg-primary hover:text-white transition-colors">
//                   Hire Me
//                 </button>
//                 <button className="w-[150px] h-10 border-[2px] border-primary rounded-full text-primary my-2 hover:bg-primary hover:text-white transition-colors">
//                   Download CV
//                 </button>
//               </div>
//             </div>
//
//             {/* Right div - Skills and Star */}
//             <div className="lg:w-1/2 w-full flex items-start justify-center relative">
//               {/* Star positioned at top center */}
//               <div className="">
//                 <Star width={50} />
//               </div>
//
//               {/* Left column skills */}
//               <div className="flex flex-col items-center space-y-8 mt-16">
//                 <div className="transform -translate-x-8">
//                   <SkillCompound
//                       icon={
//                         <svg
//                             className="w-6 h-6 text-white"
//                             aria-hidden="true"
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="24"
//                             height="24"
//                             fill="currentColor"
//                             viewBox="0 0 24 24"
//                         >
//                           <path d="M21.718 12c0-1.429-1.339-2.681-3.467-3.5.029-.18.077-.37.1-.545.217-2.058-.273-3.543-1.379-4.182-1.235-.714-2.983-.186-4.751 1.239C10.45 3.589 8.7 3.061 7.468 3.773c-1.107.639-1.6 2.124-1.379 4.182.018.175.067.365.095.545-2.127.819-3.466 2.071-3.466 3.5 0 1.429 1.339 2.681 3.466 3.5-.028.18-.077.37-.095.545-.218 2.058.272 3.543 1.379 4.182.376.213.803.322 1.235.316a5.987 5.987 0 0 0 3.514-1.56 5.992 5.992 0 0 0 3.515 1.56 2.44 2.44 0 0 0 1.236-.316c1.106-.639 1.6-2.124 1.379-4.182-.019-.175-.067-.365-.1-.545 2.132-.819 3.471-2.071 3.471-3.5Zm-6.01-7.548a1.5 1.5 0 0 1 .76.187c.733.424 1.055 1.593.884 3.212-.012.106-.043.222-.058.33-.841-.243-1.7-.418-2.57-.523a16.165 16.165 0 0 0-1.747-1.972 4.9 4.9 0 0 1 2.731-1.234Zm-7.917 8.781c.172.34.335.68.529 1.017.194.337.395.656.6.969a14.09 14.09 0 0 1-1.607-.376 14.38 14.38 0 0 1 .478-1.61Zm-.479-4.076a14.085 14.085 0 0 1 1.607-.376c-.205.313-.405.634-.6.969-.195.335-.357.677-.529 1.017-.19-.527-.35-1.064-.478-1.61ZM8.3 12a19.32 19.32 0 0 1 .888-1.75c.33-.568.69-1.118 1.076-1.65.619-.061 1.27-.1 1.954-.1.684 0 1.333.035 1.952.1a19.63 19.63 0 0 1 1.079 1.654c.325.567.621 1.15.887 1.746a18.869 18.869 0 0 1-1.953 3.403 19.218 19.218 0 0 1-3.931 0 20.169 20.169 0 0 1-1.066-1.653A19.324 19.324 0 0 1 8.3 12Zm7.816 2.25c.2-.337.358-.677.53-1.017.191.527.35 1.065.478 1.611a14.48 14.48 0 0 1-1.607.376c.202-.314.404-.635.597-.97h.002Zm.53-3.483c-.172-.34-.335-.68-.53-1.017a20.214 20.214 0 0 0-.6-.97c.542.095 1.078.22 1.606.376a14.111 14.111 0 0 1-.478 1.611h.002ZM12.217 6.34c.4.375.777.773 1.13 1.193-.37-.02-.746-.033-1.129-.033s-.76.013-1.131.033c.353-.42.73-.817 1.13-1.193Zm-4.249-1.7a1.5 1.5 0 0 1 .76-.187 4.9 4.9 0 0 1 2.729 1.233A16.253 16.253 0 0 0 9.71 7.658c-.87.105-1.728.28-2.569.524-.015-.109-.047-.225-.058-.331-.171-1.619.151-2.787.885-3.211ZM3.718 12c0-.9.974-1.83 2.645-2.506.218.857.504 1.695.856 2.506-.352.811-.638 1.65-.856 2.506C4.692 13.83 3.718 12.9 3.718 12Zm4.25 7.361c-.734-.423-1.056-1.593-.885-3.212.011-.106.043-.222.058-.331.84.243 1.697.418 2.564.524a16.37 16.37 0 0 0 1.757 1.982c-1.421 1.109-2.714 1.488-3.494 1.037Zm3.11-2.895c.374.021.753.034 1.14.034.387 0 .765-.013 1.139-.034a14.4 14.4 0 0 1-1.14 1.215 14.248 14.248 0 0 1-1.139-1.215Zm5.39 2.895c-.782.451-2.075.072-3.5-1.038a16.248 16.248 0 0 0 1.757-1.981 16.41 16.41 0 0 0 2.565-.523c.015.108.046.224.058.33.175 1.619-.148 2.789-.88 3.212Zm1.6-4.854A16.563 16.563 0 0 0 17.216 12c.352-.812.638-1.65.856-2.507 1.671.677 2.646 1.607 2.646 2.507 0 .9-.975 1.83-2.646 2.507h-.004Z" />
//                           <path d="M12.215 13.773a1.792 1.792 0 1 0-1.786-1.8v.006a1.787 1.787 0 0 0 1.786 1.794Z" />
//                         </svg>
//                       }
//                       label="React.js"
//                   />
//                 </div>
//
//                 <div className="transform translate-x-4">
//                   <SkillCompound
//                       icon={
//                         <svg
//                             className="w-6 h-6 text-white"
//                             aria-hidden="true"
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="24"
//                             height="24"
//                             fill="currentColor"
//                             viewBox="0 0 24 24"
//                         >
//                           <path d="M11.782 5.72a4.773 4.773 0 0 0-4.8 4.173 3.43 3.43 0 0 1 2.741-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.934-2.865 3.137-3.921-.969 1.379-2.44 2.207-4.259 1.231-1.253-.673-2.19-3.438-5.959-3.318ZM6.8 11.979A4.772 4.772 0 0 0 2 16.151a3.431 3.431 0 0 1 2.745-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.933-2.865 3.137-3.921-.97 1.379-2.44 2.208-4.259 1.231-1.253-.673-2.19-3.443-5.963-3.317Z" />
//                         </svg>
//                       }
//                       label="Tailwind CSS"
//                   />
//                 </div>
//               </div>
//
//               {/* Right column skill */}
//               <div className="flex flex-col items-center mt-32 ml-8">
//                 <SkillCompound
//                     icon={
//                       <svg
//                           className="w-6 h-6 text-white"
//                           aria-hidden="true"
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="24"
//                           height="24"
//                           fill="currentColor"
//                           viewBox="0 0 24 24"
//                       >
//                         <path d="m3 2 1.578 17.824L12 22l7.467-2.175L21 2H3Zm14.049 6.048H9.075l.172 2.016h7.697l-.626 6.565-4.246 1.381-4.281-1.455-.288-2.932h2.024l.16 1.411 2.4.815 2.346-.763.297-3.005H7.416l-.562-6.05h10.412l-.217 2.017Z" />
//                       </svg>
//                     }
//                     label="HTML"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//
//         {/* Divider */}
//         <div className="w-full overflow-hidden">
//           <svg
//               className="w-full h-20"
//               viewBox="0 0 1440 100"
//               preserveAspectRatio="none"
//               xmlns="http://www.w3.org/2000/svg"
//           >
//             <path fill="#2c2c2c" d="M0,0 C180,200 360,0 1440,90 L1440,0 L0,0 Z" />
//           </svg>
//         </div>
//       </>
//   );
// };
//
// export default HeroSection;