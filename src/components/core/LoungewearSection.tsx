import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { Navigation, Thumbs } from "swiper/modules";
import { useEffect, useState } from "react";
import { Swiper as SwiperCore } from "swiper";
import { Wrapper } from "../layout/Wrapper";
import partner1 from "../../assets/Artboard2 1.svg";
import partner2 from "../../assets/Artboard3 1.svg";
import partner3 from "../../assets/Artboard4 1.svg";
import partner4 from "../../assets/Artboard5 1.svg";
import partner5 from "../../assets/Artboard6 1.svg";
import { Icon } from "../ui/Icon";
import { Button } from "../ui/Button";
import { motion } from "framer-motion";

export const LoungewearSection = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("loungewear-section");
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
    <Wrapper bgColor='bg-custom-gradient'>
      <motion.div
        id='loungewear-section'
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className='h-[100%] w-full flex flex-col items-center justify-start pb-[90px]'
      >
        <div className='flex flex-col  items-center justify-center w-full pt-[77px] pb-[60px] lg:pb-[100px]'>
          <h4 className='text-primary-gray font-normal text-xl mb-4'>
            as seen in
          </h4>
          <div className='flex items-center justify-center gap-5 flex-wrap'>
            <img
              src={partner1}
              alt='partner logo'
            />
            <img
              src={partner2}
              alt='partner logo'
            />
            <img
              src={partner3}
              alt='partner logo'
            />
            <img
              src={partner4}
              alt='partner logo'
            />
            <img
              src={partner5}
              alt='partner logo'
            />
          </div>
        </div>
        <div className='flex items-center justify-center lg:justify-start w-full lg:pl-[70px] pb-[25px] lg:pb-[75px]'>
          <h3 className='text-primary-blue font-normal text-4xl text-center'>
            Loungewear you can be proud of.
          </h3>
        </div>

        <div className='flex items-center lg:flex-row flex-col-reverse justify-between w-full px-[32px] lg:px-[70px]'>
          <div className='w-full lg:w-[41%] mt-[60px] lg:mt-0'>
            <ul className='flex flex-col items-start justify-center gap-6'>
              <li
                className={`flex flex-col lg:flex-row items-center lg:items-start gap-5 lg:gap-8 border-b border-b-primary-gray pb-10 text-center 
                lg:text-left lg:pb-0 lg:border-b-0`}
              >
                <div className='flex items-center justify-center bg-primary-light-cream p-2 rounded-full'>
                  <Icon
                    name='cart'
                    width={30}
                    height={30}
                  />
                </div>
                <p className='flex flex-col items-center lg:items-start justify-center '>
                  <span className='text-primary-blue text-xl font-normal'>
                    Ethically sourced.
                  </span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  lobortis sapien facilisis tincidunt pellentesque. In eget
                  ipsum et felis finibus consequat.
                </p>
              </li>
              <li
                className={`flex flex-col lg:flex-row items-center lg:items-start gap-5 lg:gap-8 border-b border-b-primary-gray pb-10 text-center 
                lg:text-left lg:pb-0 lg:border-b-0`}
              >
                <div className='flex items-center justify-center bg-primary-light-cream p-2 rounded-full'>
                  <Icon
                    name='leaf'
                    width={30}
                    height={30}
                  />
                </div>
                <p className='flex flex-col items-center lg:items-start justify-center '>
                  <span className='text-primary-blue text-xl font-normal'>
                    Responsibly made.
                  </span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  lobortis sapien facilisis tincidunt pellentesque. In eget
                  ipsum et felis finibus consequat.
                </p>
              </li>
              <li
                className={`flex flex-col lg:flex-row items-center lg:items-start gap-5 lg:gap-8 border-b border-b-primary-gray pb-10 text-center 
                lg:text-left lg:pb-0 lg:border-b-0`}
              >
                <div className='flex items-center justify-center bg-primary-light-cream p-2 rounded-full'>
                  <Icon
                    name='sunMoon'
                    width={30}
                    height={30}
                  />
                </div>
                <p className='flex flex-col items-center lg:items-start justify-center '>
                  <span className='text-primary-blue text-xl font-normal'>
                    Made for living in.
                  </span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  lobortis sapien facilisis tincidunt pellentesque. In eget
                  ipsum et felis finibus consequat.
                </p>
              </li>
              <li
                className={`flex flex-col lg:flex-row items-center lg:items-start gap-5 lg:gap-8 pb-10 text-center 
                lg:text-left lg:pb-0`}
              >
                <div className='flex items-center justify-center bg-primary-light-cream p-2 rounded-full'>
                  <Icon
                    name='wave'
                    width={30}
                    height={30}
                  />
                </div>
                <p className='flex flex-col items-center lg:items-start justify-center'>
                  <span className='text-primary-blue text-xl font-normal'>
                    Unimaginably comfortable.
                  </span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  lobortis sapien facilisis tincidunt pellentesque. In eget
                  ipsum et felis finibus consequat.
                </p>
              </li>
            </ul>
          </div>
          <div className=' w-full lg:w-[40%] relative flex flex-col  '>
            <div className='relative flex items-center justify-center flex-col'>
              <div className='swiper-button-prev-custom absolute top-[50%] left-0 lg:left-[5%] z-10'>
                <Icon
                  name='arrowLeft'
                  strokeColor='rgb(103, 104, 105)'
                />
              </div>
              <div className='swiper-button-next-custom absolute top-[50%] right-0 lg:right-[5%] z-10'>
                <Icon
                  name='arrowRight'
                  strokeColor='rgb(103, 104, 105)'
                />
              </div>
              <Swiper
                modules={[Navigation, Thumbs]}
                className='h-[450px] lg:h-[650px] w-[300px] lg:w-[430px] static lg:absolute'
                navigation={{
                  nextEl: ".swiper-button-next-custom",
                  prevEl: ".swiper-button-prev-custom",
                }}
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed
                      ? thumbsSwiper
                      : null,
                }}
                slidesPerView={1}
                spaceBetween={10}
                pagination={false}
              >
                {Array.from({ length: 8 }).map((_, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src='https://res.cloudinary.com/dudiful8w/image/upload/fl_preserve_transparency/v1727015946/Group_4445_hx4ycn.jpg?_s=public-apps'
                      alt='Image 1'
                      className='h-[650px] w-[430px]'
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <p className='pt-[7px] text-primary-gray font-normal lg:absolute lg:bottom-[-345px]'>
                White Robe
              </p>
              <Swiper
                modules={[Thumbs]}
                onSwiper={setThumbsSwiper}
                slidesPerView={8}
                spaceBetween={10}
                className='absolute h-[390px] lg:h-[570px] w-[260px] lg:w-[90%] xl:w-[70%] flex items-end justify-center lg:justify-start'
                watchSlidesProgress
              >
                {Array.from({ length: 8 }).map((_, index) => (
                  <SwiperSlide
                    key={index}
                    className='flex items-end justify-center'
                  >
                    <img
                      src='https://res.cloudinary.com/dudiful8w/image/upload/v1727066408/Rectangle_798_dwmqwy.png'
                      alt={`Thumbnail ${index + 1}`}
                      className='w-[22px] h-[22px]'
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        <div className='static lg:hidden'>
          <Button />
        </div>
      </motion.div>
    </Wrapper>
  );
};
