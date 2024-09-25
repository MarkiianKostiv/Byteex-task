import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Wrapper } from "../layout/Wrapper";
import { Icon } from "../ui/Icon";
import { Button } from "../ui/Button";
import { faqData } from "../../lib/faqData";

export const QuestionsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const [openIndexes, setOpenIndexes] = useState(
    Array(faqData.length).fill(false)
  );

  const toggleFAQ = (index: number) => {
    setOpenIndexes((prevState) =>
      prevState.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("questions-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 1.5) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Wrapper>
      <motion.div
        id='questions-section'
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className={`w-full px-[29px] sm:px-[44px] flex items-center lg:items-start justify-center pb-[88px] 
          lg:justify-between pt-[68px] sm:pt-[111px] lg:pl-[130px] lg:pr-[80px]  
          xl:pl-[210px] xl:pr-[110px] gap-[88px]`}
      >
        <div className='w-full lg:w-[60%]'>
          <h3 className='text-center lg:text-left text-primary-blue font-normal text-3xl mb-10'>
            Frequently asked questions.
          </h3>
          <div className=''>
            {faqData.map((faq, index) => (
              <details
                key={index}
                className={`mb-4 border-t-2 border-t-[rgb(234,234,234)] ${
                  index === faqData.length - 1
                    ? "border-b-2 border-b-[rgb(234,234,234)] pb-4 mb-0"
                    : ""
                }`}
                open={openIndexes[index]}
                onToggle={() => toggleFAQ(index)}
              >
                <summary
                  className={`cursor-pointer list-none text-primary-blue flex items-center justify-between`}
                >
                  <span className='font-normal text-lg'>{faq.question}</span>
                  <span className='text-4xl font-medium'>
                    {openIndexes[index] ? "–" : "+"}
                  </span>
                </summary>
                <p className='mt-3 text-sm text-primary-gray font-normal'>
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
          <div className='flex flex-col mt-10 lg:hidden'>
            <motion.div
              className='flex items-center justify-center'
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button />
            </motion.div>
            <motion.div
              className='flex gap-4 items-center justify-center mt-3'
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className='flex'>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Icon
                    key={index}
                    name='star'
                    strokeColor='rgb(255, 184, 1)'
                  />
                ))}
              </div>
              <p className='text-secondary-gray text-sm font-normal'>
                Over 500+ 5 Star Reviews Online
              </p>
            </motion.div>
          </div>
        </div>
        <div className='hidden lg:flex items-center justify-start pt-[130px] pl-[110px] pr-[120px] pb-[120px] relative'>
          <img
            src='https://res.cloudinary.com/dudiful8w/image/upload/v1727092785/Group_4441_gqs0ya.png'
            alt='model img'
            className='absolute top-0 right-0 h-[253px] w-[167px] object-cover'
          />
          <div className='bg-custom-gradient-2 w-[150px] h-[187px] absolute top-[50px] left-[20px]' />
          <img
            src='https://res.cloudinary.com/dudiful8w/image/upload/v1727093060/Group_4440_fnglcu.png'
            alt='model img'
            className='h-[355px] w-[225px] z-30 object-cover'
          />
          <div className='bg-custom-gradient-2 w-[150px] h-[187px] absolute bottom-[60px] right-[20px]' />
          <img
            src='https://res.cloudinary.com/dudiful8w/image/upload/v1727015946/Group_4534_uemioj.jpg'
            alt='model img'
            className='absolute bottom-0 left-0 h-[159px] w-[216px] object-cover'
          />
        </div>
      </motion.div>
    </Wrapper>
  );
};
