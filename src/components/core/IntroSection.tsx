import { Wrapper } from "../layout/Wrapper";
import { motion } from "framer-motion";

export const IntroSection = () => {
  return (
    <Wrapper>
      <motion.div
        className='text-black'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Intro
      </motion.div>
    </Wrapper>
  );
};
