import { Wrapper } from "../layout/Wrapper";
import Logo from "../../assets/LOGO (1).svg";
import { Icon } from "../ui/Icon";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";

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
          className='flex items-start justify-center lg:justify-start w-full'
          initial='hidden'
          animate='visible'
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <img
            className=' ml-0 lg:ml-24 mt-4 mb-4 lg:mt-9 lg:mb-[61px]'
            src={Logo}
            alt='Byteex Logo'
          />
        </motion.div>
        <motion.div
          className='flex flex-col items-center lg:items-start justify-center w-full px-[30px] sm:px-[62px]'
          initial='hidden'
          animate='visible'
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className='mb-6 text-xl sm:text-4xl text-center lg:text-left font-normal text-primary-blue w-full sm:w-[450px]'>
            Don’t apologize for being comfortable.
          </h3>
          <div className='flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between w-full'>
            <aside className='w-[100%] flex flex-col items-center justify-center lg:w-[30%]'>
              <ul className='w-[90%] sm:w-[50%] lg:w-full mt-[22px] lg:mt-0'>
                <motion.li
                  className='flex items-center gap-3 justify-center'
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

              <motion.div
                className='mt-[29px] lg:mt-[39px]'
                initial='hidden'
                animate='visible'
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Button />
              </motion.div>
            </aside>
            <div className='flex items-center justify-center relative w-[50%] lg:w-[70%]'>
              <div className='bg-custom-gradient-2 w-[70px] h-[100px] sm:w-[135px] sm:h-[190px] absolute left-[170px] sm:left-[150px]'></div>
              <img
                src='https://res.cloudinary.com/dudiful8w/image/upload/v1727015946/Group_4535_lajjoy.jpg'
                alt=''
                className={`w-[110px] h-[165px] sm:w-[210px] sm:h-[230px] absolute left-[120px] sm:left-[200px] object-cover`}
              />
              <img
                src='https://res.cloudinary.com/dudiful8w/image/upload/fl_preserve_transparency/v1727015946/Group_4445_hx4ycn.jpg?_s=public-apps'
                alt=''
                className={` w-[145px] h-[225px] sm:w-[285px] sm:h-[430px] lg:absolute z-20 object-cover`}
              />
              <img
                src='https://res.cloudinary.com/dudiful8w/image/upload/v1727015946/Group_4534_uemioj.jpg'
                alt=''
                className={`w-[110px] h-[165px] sm:w-[210px] sm:h-[230px] absolute right-[120px] sm:right-[200px] z-10 object-cover`}
              />
              <div className='bg-custom-gradient-2 w-[70px] h-[100px] sm:w-[130px] sm:h-[190px] absolute right-[170px] sm:right-[150px]'></div>
            </div>
          </div>
        </motion.div>
      </div>
    </Wrapper>
  );
};
