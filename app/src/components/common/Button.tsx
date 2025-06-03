// import Image from "next/image";

// interface ButtonProps {
//   text: string;
//   imageUrl: string;
//   onClick: () => void;
// }

// const Button = ({ text, imageUrl, onClick }: ButtonProps) => {
//   return (
//     <button
//       onClick={onClick}
//       className="group h-14 bg-primary hover:scale-110 transition-transform duration-300 shadow-primary rounded-full flex flex-row items-center pl-2 pr-4"
//     >
//       <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
//         <Image
//           src={imageUrl}
//           width={24}
//           height={24}
//           alt="Icon"
//           className="w-7 h-7 group-hover:rotate-[360deg] transition-transform duration-1000"
//         />
//       </div>
//       <p className="text-white ml-2">{text}</p>
//     </button>
//   );
// };

// export default Button;
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface ButtonProps {
  text: string;
  imageUrl: string;
  onClick: () => void;
}

const Button = ({ text, imageUrl, onClick }: ButtonProps) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      initial={{ opacity: 0, scale: 0 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 1, ease: "easeIn" }}
      className="origin-center h-14 bg-primary hover:scale-110 transition-transform duration-300 shadow-primary rounded-full flex flex-row items-center pl-2 pr-4"
    >
      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
        <Image
          src={imageUrl}
          width={24}
          height={24}
          alt="Icon"
          className="w-7 h-7"
        />
      </div>
      <p className="text-white ml-2">{text}</p>
    </motion.button>
  );
};

export default Button;
