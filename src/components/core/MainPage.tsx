import { Footer } from "../layout/Footer";
import { Header } from "../layout/Header";
import { BenefitsSection } from "./BenefitsSection";
import { FansFeatBackSection } from "./FansFeatBackSection";
import { FounderBioSection } from "./FounderBioSection";
import { IntroSection } from "./IntroSection";
import { LoungewearSection } from "./LoungewearSection";
import { QuestionsSection } from "./QuestionsSection";
import { ImpactSection } from "./ImpactSection";

export const MainPage = () => {
  return (
    <main className='flex flex-col items-center justify-start w-full'>
      <Header />

      <IntroSection />

      <LoungewearSection />

      <FounderBioSection />

      <BenefitsSection />

      <FansFeatBackSection />

      <QuestionsSection />

      <ImpactSection />

      <Footer />
    </main>
  );
};
