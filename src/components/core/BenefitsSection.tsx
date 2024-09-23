import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Wrapper } from "../layout/Wrapper";
import { Button } from "../ui/Button";
import { Icon } from "../ui/Icon";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { Navigation } from "swiper/modules";

export const BenefitsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("benefits-section");
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
    <Wrapper bgColor='bg-secondary-white'>
      <motion.div
        id='benefits-section'
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className='flex flex-col items-center justify-center w-full py-[75px]'
      >
        <h3 className='text-primary-blue font-normal text-3xl mb-[46px]'>
          Comfort made easy
        </h3>

        <motion.div
          className='hidden lg:flex mb-[56px] w-full items-center justify-center gap-[41px] '
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div
            className={`bg-primary-purple-gray flex items-center justify-center 
            flex-col gap-5 py-[80px] px-[35px] w-[350px] rounded-lg border border-1 
            border-solid border-[rgb(237,237,237)]`}
          >
            <Icon
              name='cart'
              width={51}
              height={41}
            />
            <h4 className='text-primary-blue font-normal text-xl'>You save.</h4>
            <p className='text-center text-primary-gray font-normal text-sm'>
              Browse our comfort sets and save 15% when you bundle.
            </p>
          </div>

          <div
            className={`bg-primary-light-cream flex items-center justify-center 
            flex-col gap-5 py-[80px] px-[35px] w-[350px] rounded-lg border border-1 
            border-solid border-[rgb(237,237,237)]`}
          >
            <Icon
              name='cart'
              width={51}
              height={41}
            />
            <h4 className='text-primary-blue font-normal text-xl'>You save.</h4>
            <p className='text-center text-primary-gray font-normal text-sm'>
              Browse our comfort sets and save 15% when you bundle.
            </p>
          </div>

          <div
            className={`bg-primary-purple-gray flex items-center justify-center 
            flex-col gap-5 py-[80px] px-[35px] w-[350px] rounded-lg border border-1 
            border-solid border-[rgb(237,237,237)]`}
          >
            <Icon
              name='sunMoon'
              width={51}
              height={41}
            />
            <h4 className='text-primary-blue font-normal text-xl'>You save.</h4>
            <p className='text-center text-primary-gray font-normal text-sm'>
              Browse our comfort sets and save 15% when you bundle.
            </p>
          </div>
        </motion.div>
        <div className='relative flex lg:hidden items-center justify-center flex-col'>
          <div className='swiper-button-prev-custom absolute top-[50%] left-[-10%] z-10'>
            <Icon
              name='arrowLeft'
              strokeColor='rgb(103, 104, 105)'
            />
          </div>
          <div className='swiper-button-next-custom absolute top-[50%] right-[-10%] z-10'>
            <Icon
              name='arrowRight'
              strokeColor='rgb(103, 104, 105)'
            />
          </div>
          <Swiper
            modules={[Navigation]}
            className='w-[300px]  static mb-[41px]'
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            slidesPerView={1}
            spaceBetween={10}
            pagination={false}
          >
            <SwiperSlide
              className={`bg-primary-purple-gray flex items-center justify-center 
          flex-col gap-5 py-[60px] px-[35px] w-[350px] rounded-lg border border-1 
          border-solid border-[rgb(237,237,237)]`}
            >
              <Icon
                name='cart'
                width={51}
                height={41}
              />
              <h4 className='text-primary-blue font-normal text-xl'>
                You save.
              </h4>
              <p className='text-center text-primary-gray font-normal text-sm'>
                Browse our comfort sets and save 15% when you bundle.
              </p>
            </SwiperSlide>
            <SwiperSlide
              className={`bg-primary-light-cream flex items-center justify-center 
            flex-col gap-5 py-[60px] px-[35px] w-[350px] rounded-lg border border-1 
            border-solid border-[rgb(237,237,237)]`}
            >
              <Icon
                name='cart'
                width={51}
                height={41}
              />
              <h4 className='text-primary-blue font-normal text-xl'>
                You save.
              </h4>
              <p className='text-center text-primary-gray font-normal text-sm'>
                Browse our comfort sets and save 15% when you bundle.
              </p>
            </SwiperSlide>
            <SwiperSlide
              className={`bg-primary-purple-gray flex items-center justify-center 
          flex-col gap-5 py-[60px] px-[35px] w-[350px] rounded-lg border border-1 
          border-solid border-[rgb(237,237,237)]`}
            >
              <Icon
                name='sunMoon'
                width={51}
                height={41}
              />
              <h4 className='text-primary-blue font-normal text-xl'>
                You save.
              </h4>
              <p className='text-center text-primary-gray font-normal text-sm'>
                Browse our comfort sets and save 15% when you bundle.
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
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
      </motion.div>
    </Wrapper>
  );
};
