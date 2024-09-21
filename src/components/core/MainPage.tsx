import { Footer } from "../layout/Footer";
import { Header } from "../layout/Header";
import { BenefitsSection } from "./BenefitsSection";
import { FansFeatBackSection } from "./FansFeatBackSection";
import { FounderBioSection } from "./FounderBioSection";
import { IntroSection } from "./IntroSection";
import { LoungewearSection } from "./LoungewearSection";
import { motion, useScroll, useTransform } from "framer-motion";
import { QuestionsSection } from "./QuestionsSection";
import { ImpactSection } from "./ImpactSection";

export const MainPage = () => {
  const { scrollYProgress } = useScroll();

  const getOpacityTransform = (start: number, end: number) =>
    useTransform(scrollYProgress, [start, end], [1, 0]);

  return (
    <main>
      <Header />

      <motion.div
        style={{ opacity: getOpacityTransform(0, 0.1) }}
        className='h-screen will-change-transform'
      >
        <IntroSection />
      </motion.div>

      <motion.div
        style={{ opacity: getOpacityTransform(0.1, 0.2) }}
        className='h-screen will-change-transform'
      >
        <LoungewearSection />
      </motion.div>

      <motion.div
        style={{ opacity: getOpacityTransform(0.2, 0.3) }}
        className='h-screen will-change-transform'
      >
        <FounderBioSection />
      </motion.div>

      <motion.div
        style={{ opacity: getOpacityTransform(0.3, 0.4) }}
        className='h-screen will-change-transform'
      >
        <BenefitsSection />
      </motion.div>

      <motion.div
        style={{ opacity: getOpacityTransform(0.4, 0.5) }}
        className='h-screen will-change-transform'
      >
        <FansFeatBackSection />
      </motion.div>

      <motion.div
        style={{ opacity: getOpacityTransform(0.5, 0.6) }}
        className='h-screen will-change-transform'
      >
        <QuestionsSection />
      </motion.div>

      <motion.div
        style={{ opacity: getOpacityTransform(0.6, 0.7) }}
        className='h-screen will-change-transform'
      >
        <ImpactSection />
      </motion.div>

      <Footer />
    </main>
  );
};
