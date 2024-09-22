import { Wrapper } from "../layout/Wrapper";
import Logo from "../../assets/LOGO (1).svg";
import { Icon } from "../ui/Icon";
import { motion } from "framer-motion";

export const IntroSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Wrapper
      bgColor='bg-primary-white'
      height='h-[100%]'
    >
      <div className='h-[100%] w-full flex flex-col items-center justify-start pb-[162px]'>
        <motion.div
          className='flex items-start justify-start w-full'
          initial='hidden'
          animate='visible'
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <img
            className='ml-24 mt-9 mb-[61px]'
            src={Logo}
            alt='Byteex Logo'
          />
        </motion.div>
        <motion.div
          className='flex flex-col items-start justify-center w-full px-[62px]'
          initial='hidden'
          animate='visible'
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className='mb-6 text-4xl font-normal text-primary-blue w-[450px]'>
            Don’t apologize for being comfortable.
          </h3>
          <div className='flex items-center justify-between w-full'>
            <aside className='w-[30%]'>
              <ul>
                <motion.li
                  className='flex items-center gap-3'
                  initial='hidden'
                  animate='visible'
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className='flex items-center justify-center bg-primary-light-cream p-2 rounded-full'>
                    <Icon
                      name='sunMoon'
                      width={30}
                      height={30}
                    />
                  </div>
                  <p>Beautiful, comfortable loungewear for day or night.</p>
                </motion.li>
                <motion.li
                  className='flex items-center gap-3'
                  initial='hidden'
                  animate='visible'
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <div className='flex items-center justify-center bg-primary-light-cream p-2 rounded-full'>
                    <Icon
                      name='cart'
                      width={30}
                      height={30}
                    />
                  </div>
                  <p>No wasteful extras, like tags or plastic packaging.</p>
                </motion.li>
                <motion.li
                  className='flex items-center gap-3'
                  initial='hidden'
                  animate='visible'
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className='flex items-center justify-center bg-primary-light-cream p-2 rounded-full'>
                    <Icon
                      name='wave'
                      width={25}
                      height={25}
                    />
                  </div>
                  <p>
                    Our signature fabric is incredibly comfortable — unlike
                    anything you’ve ever felt.
                  </p>
                </motion.li>
              </ul>
              <motion.button
                className={`mt-[39px] bg-primary-blue text-white flex items-center 
                  justify-between gap-4 font-normal text-lg py-4 px-10 rounded-md
                  transition-transform duration-300 ease-in-out
                  hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 active:translate-y-0 active:shadow-none`}
                initial='hidden'
                animate='visible'
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                Customize Your Outfit
                <Icon
                  name='arrow'
                  strokeColor='white'
                />
              </motion.button>
            </aside>
            <div className='flex items-center justify-center relative w-[70%]'>
              <div className='bg-custom-gradient-2 w-[135px] h-[190px] absolute left-[150px]'></div>
              <img
                src='https://res.cloudinary.com/dudiful8w/image/upload/v1727015946/Group_4535_lajjoy.jpg'
                alt=''
                className='w-[210px] h-[230px] absolute left-[200px]'
              />
              <img
                src='https://res.cloudinary.com/dudiful8w/image/upload/fl_preserve_transparency/v1727015946/Group_4445_hx4ycn.jpg?_s=public-apps'
                alt=''
                className='w-[285px] h-[430px] absolute z-20'
              />
              <img
                src='https://res.cloudinary.com/dudiful8w/image/upload/v1727015946/Group_4534_uemioj.jpg'
                alt=''
                className='w-[210px] h-[230px] absolute right-[200px] z-10'
              />
              <div className='bg-custom-gradient-2 w-[135px] h-[190px] absolute right-[150px]'></div>
            </div>
          </div>
        </motion.div>
      </div>
    </Wrapper>
  );
};
