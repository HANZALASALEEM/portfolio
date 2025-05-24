import { motion } from "framer-motion";

interface AnimatedParagraphProps {
    text: string;
}

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
        },
    },
};

const wordAnimation = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
};

const AnimatedParagraph = ({ text }: AnimatedParagraphProps) => {
    const words = text.split(" ");

    return (
        <motion.p
            className="text-white text-sm flex flex-wrap"
            variants={container}
            initial="hidden"
            animate="visible"
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
