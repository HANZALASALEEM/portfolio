// import { motion } from "framer-motion";

// interface AnimatedParagraphProps {
//   text: string;
//   className?: string;
//   isHtml?: boolean;
// }

// const container = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.05 },
//   },
// };

// const wordAnimation = {
//   hidden: { opacity: 0, y: 10 },
//   visible: { opacity: 1, y: 0 },
// };

// const AnimatedParagraph = ({
//   text,
//   className,
//   isHtml,
// }: AnimatedParagraphProps) => {
//   if (isHtml) {
//     return (
//       <motion.p
//         className={className}
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         dangerouslySetInnerHTML={{ __html: text }}
//       />
//     );
//   }

//   const words = text.split(" ");

//   return (
//     <motion.p
//       className={className}
//       variants={container}
//       initial="hidden"
//       animate="visible"
//     >
//       {words.map((word, index) => (
//         <motion.span
//           key={index}
//           className="mr-1 inline-block"
//           variants={wordAnimation}
//         >
//           {word}
//         </motion.span>
//       ))}
//     </motion.p>
//   );
// };

// export default AnimatedParagraph;
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

interface AnimatedParagraphProps {
  text: string;
  className?: string;
  isHtml?: boolean;
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const wordAnimation = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const AnimatedParagraph = ({
  text,
  className,
  isHtml,
}: AnimatedParagraphProps) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (inView) setShouldAnimate(true);
  }, [inView]);

  if (isHtml) {
    return (
      <motion.p
        ref={ref}
        className={className}
        initial={{ opacity: 0, y: 20 }}
        animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    );
  }

  const words = text.split(" ");

  return (
    <motion.p
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="mr-1 inline-block"
          variants={wordAnimation}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default AnimatedParagraph;
