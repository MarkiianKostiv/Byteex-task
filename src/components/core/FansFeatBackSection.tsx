import { Wrapper } from "../layout/Wrapper";
import { Icon } from "../ui/Icon";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { Navigation } from "swiper/modules";
import { cloudInary } from "../../lib/clouinary";
import { useEffect, useState } from "react";
import { getReviews } from "../../lib/mockApi";
import { motion } from "framer-motion";

export const FansFeatBackSection = () => {
  interface ReviewType {
    profileImage: { link: string; alt: string };
    name: string;
    comment: string;
  }
  const [reviews, setReviews] = useState<ReviewType[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const gettingData = async () => {
      const reviewsList = await getReviews();
      setReviews(reviewsList);
    };
    gettingData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("fans-reviews");
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
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        id='fans-reviews'
        className='w-full flex flex-col items-center justify-center'
      >
        <h3 className='text-center text-primary-blue font-normal text-3xl mb-[35px]'>
          What are our fans saying?
        </h3>
        <div className='w-[33%] flex items-center justify-center mb-[56px]'>
          <p className='text-center text-primary-gray font-normal text-sm'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
            felis finibus consequat. Fusce non nibh luctus.
          </p>
        </div>

        <div className='w-full justify-between hidden md:flex flex-wrap gap-[5px]'>
          {cloudInary.images_clients.map((item, index) => (
            <img
              key={index}
              src={item.link}
              alt={item.alt}
              className='w-[128px] h-[128px]'
            />
          ))}
        </div>
        <Swiper
          className='w-full md:hidden'
          slidesPerView={1}
          pagination={false}
        >
          {cloudInary.images_clients.map((_, slideIndex) => (
            <SwiperSlide key={slideIndex}>
              <div className='grid grid-cols-5 grid-rows-2 gap-4'>
                {cloudInary.images_clients
                  .slice(slideIndex * 10, slideIndex * 10 + 10)
                  .map((item, index) => (
                    <div
                      key={index}
                      className='w-[100px] h-[100px] border-4 border-white'
                    >
                      <img
                        src={item.link}
                        alt={item.alt}
                        className='w-full h-full object-cover'
                      />
                    </div>
                  ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className='relative flex items-center justify-center flex-col mt-[75px]'>
          <div className='swiper-button-prev-custom absolute top-[50%] left-[-5%] z-10'>
            <Icon
              name='arrowLeft'
              strokeColor='rgb(103, 104, 105)'
            />
          </div>
          <div className='swiper-button-next-custom absolute top-[50%] right-[-5%] z-10'>
            <Icon
              name='arrowRight'
              strokeColor='rgb(103, 104, 105)'
            />
          </div>
          <Swiper
            modules={[Navigation]}
            className='w-[300px] lg:w-[900px] h-[300px] static mb-[41px]'
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            slidesPerView={3}
            pagination={false}
            breakpoints={{
              1100: { slidesPerView: 3, spaceBetween: 10 },
              1024: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },

              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
            }}
          >
            {reviews.map((item, index) => (
              <SwiperSlide
                key={index}
                className={`bg-secondary-white flex items-center justify-center 
              flex-col gap-5 py-[60px] px-[35px] w-[250px] rounded-lg border border-1 
              border-solid border-[rgba(0,0,0,0.08)]`}
              >
                <motion.div
                  className='flex flex-col w-[250px] gap-3'
                  initial={{ opacity: 0, y: 50 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className='flex items-center justify-start gap-3'>
                    <img
                      src={item.profileImage.link}
                      alt={item.profileImage.alt}
                      className='rounded-full bg-primary-blue w-10 h-10'
                    />
                    <div>
                      <div className='flex'>
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Icon
                            key={index}
                            name='star'
                            strokeColor='rgb(255, 184, 1)'
                          />
                        ))}
                      </div>
                      <h4 className='text-primary-gray text-sm font-normal'>
                        {item.name}
                      </h4>
                    </div>
                  </div>
                  <p className='text-primary-gray text-xs font-normal'>
                    {item.comment}
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </Wrapper>
  );
};
