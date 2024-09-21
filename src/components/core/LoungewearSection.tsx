import { Wrapper } from "../layout/Wrapper";
import { motion } from "framer-motion";

export const LoungewearSection = () => {
  return (
    <Wrapper bgColor='bg-black'>
      <motion.div
        className='text-white h-min-screen'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Loungewear
      </motion.div>
    </Wrapper>
  );
};
