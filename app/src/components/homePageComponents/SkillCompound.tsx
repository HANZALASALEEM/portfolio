import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SkillCompoundProps {
    icon: ReactNode;
    label: string;
}

const SkillCompound = ({ icon, label }: SkillCompoundProps) => {
    return (
        <motion.div
            className="relative w-40 h-10 cursor-grab"
            drag
            dragElastic={0.3}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            whileDrag={{ scale: 1.05 }}
        >
            <div className="bg-primary rounded-full absolute top-0 left-0 z-[1] w-40 h-10">
                <div className="flex w-full h-full justify-center items-center gap-3">
                    {icon}
                    <p className="text-white text-lg">{label}</p>
                </div>
            </div>
            <div className="w-40 h-10 border-2 border-dashed border-primary rounded-full absolute top-1 left-1 z-0"></div>
        </motion.div>
    );
};

export default SkillCompound;
