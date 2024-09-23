import { motion } from "framer-motion";
import { Icon } from "./Icon";

export const Button = () => {
  return (
    <motion.button
      className={` bg-primary-blue text-white flex items-center 
                  justify-between gap-4 font-normal text-lg py-4 px-10 rounded-md
                  transition-transform duration-300 ease-in-out
                  hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 active:translate-y-0 active:shadow-none`}
      initial='hidden'
      animate='visible'
      transition={{ duration: 0.5, delay: 0.7 }}
    >
      Customize Your Outfit
      <Icon
        name='arrow'
        strokeColor='white'
      />
    </motion.button>
  );
};
