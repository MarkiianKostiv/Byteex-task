import { Header } from "../layout/Header";
import { IntroSection } from "./IntroSection";
import { LoungewearSection } from "./LoungewearSection";
import { motion, useScroll, useTransform } from "framer-motion";

export const MainPage = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <div>
      <Header />

      <motion.div style={{ y }}>
        <IntroSection />
      </motion.div>

      <motion.div style={{ y }}>
        <LoungewearSection />
      </motion.div>
    </div>
  );
};
