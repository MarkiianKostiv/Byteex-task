import { Footer } from "../layout/Footer";
import { Wrapper } from "../layout/Wrapper";
import { Button } from "../ui/Button";
import { Icon } from "../ui/Icon";
import bankingIcons from "../../assets/banking.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const ImpactSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("impact-section");
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
        id='impact-section'
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className='flex flex-col items-center justify-start w-full'
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='bg-primary-purple-gray w-full flex items-center justify-center flex-col py-[35px]'
        >
          <h3 className='text-primary-dark-blue font-normal text-2xl mb-[18px]'>
            Our total green impact
          </h3>
          <div className='flex w-full px-[60px] sm:px-0 sm:w-auto flex-col sm:flex-row items-center justify-center gap-[40px] flex-wrap'>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`flex flex-col items-center justify-center sm:pr-9 w-full sm:w-auto
                border-b-2 border-b-[rgba(196,196,196,0.5)] sm:border-b-0  pb-[16px] sm:pb-0
                sm:border-r-2 sm:border-r-[rgba(196,196,196,0.5)]`}
            >
              <div className='flex items-center justify-center bg-[rgb(228,228,228)] p-2 rounded-full'>
                <Icon name='cart' />
              </div>
              <span className='text-primary-dark-blue font-normal text-xl'>
                3,927 kg
              </span>
              <p className='text-primary-dark-blue font-normal text-sm'>
                of CO2 saved
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className={`flex flex-col items-center justify-center pb-[16px] sm:pb-0 sm:pr-9 w-full sm:w-auto
                border-b-2 border-b-[rgba(196,196,196,0.5)] sm:border-b-0 
                sm:border-r-2 sm:border-r-[rgba(196,196,196,0.5)]`}
            >
              <div className='flex items-center justify-center bg-[rgb(228,228,228)] p-2 rounded-full'>
                <Icon name='water' />
              </div>
              <span className='text-primary-dark-blue font-normal text-xl'>
                2,546,167 days
              </span>
              <p className='text-primary-dark-blue font-normal text-sm'>
                of drinking water saved
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className='hidden sm:flex flex-col items-center justify-center pr-9'
            >
              <div className='flex items-center justify-center bg-[rgb(228,228,228)] p-2 rounded-full'>
                <Icon name='lightning' />
              </div>
              <span className='text-primary-dark-blue font-normal text-xl'>
                7,321 kWh
              </span>
              <p className='text-primary-dark-blue font-normal text-sm'>
                of energy saved
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className='bg-custom-gradient-3 w-full py-[74px] flex flex-col items-center justify-center'
        >
          <div className='w-full flex items-center justify-center flex-col'>
            <h3 className='text-center text-primary-blue font-normal text-3xl mb-6'>
              Find something you love.
            </h3>
            <p className='text-center text-primary-gray font-normal text-sm mb-12 hidden sm:inline w-[35%]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
              felis finibus consequat.
            </p>
            <p className='text-center text-primary-gray font-normal px-[25px] text-sm sm:hidden'>
              Click below to browse our collection!
            </p>
          </div>

          <div className='flex items-center justify-center relative w-full lg:w-[80%] h-[375px] lg:h-[430px]'>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className={`bg-custom-gradient-2 w-[65px] h-[95px] lg:w-[100px] lg:h-[150px] absolute left-[20px] 
                sm:left-[50px] md:left-[100px] lg:left-[300px]`}
            ></motion.div>
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.4 }}
              src='https://res.cloudinary.com/dudiful8w/image/upload/v1727092785/Group_4441_gqs0ya.png'
              alt=''
              className={`w-[105px] h-[150px] lg:w-[150px] lg:h-[300px] absolute left-[60px] sm:left-[100px] 
                md:left-[150px] lg:left-[350px] object-cover`}
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.6 }}
              src='https://res.cloudinary.com/dudiful8w/image/upload/v1727097587/Group_4447_lf2f7u.png'
              alt=''
              className={`w-[130px] h-[250px] sm:w-[160px] sm:h-[280px] md:w-[185px] md:h-[330px] 
                lg:w-[285px] lg:h-[430px] absolute z-20 object-cover`}
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.8 }}
              src='https://res.cloudinary.com/dudiful8w/image/upload/v1727093060/Group_4440_fnglcu.png'
              alt=''
              className={`w-[105px] h-[150px] lg:w-[150px] lg:h-[300px] absolute right-[60px] sm:right-[100px] 
                md:right-[150px] lg:right-[350px] z-10 object-cover `}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 2 }}
              className={`bg-custom-gradient-2 w-[65px] h-[95px] lg:w-[100px] lg:h-[150px] absolute 
                right-[20px] sm:right-[50px] md:right-[100px] lg:right-[300px]`}
            ></motion.div>
          </div>

          <div className='mt-0 flex flex-col items-center justify-center sm:mt-[60px]'>
            <Button />
            <div className='hidden sm:flex items-start justify-center mt-2 gap-5'>
              <div className='flex items-start justify-center gap-2 border-r-2 pr-5 border-r-[rgba(196,196,196,0.5)]'>
                <Icon
                  name='cart'
                  strokeColor='rgb(31, 173, 64)'
                />
                <p className='text-primary-green'> Ships in 1-2 Days</p>
              </div>
              <img
                src={bankingIcons}
                alt='banking icons'
              />
            </div>
            <div className='flex sm:hidden'>
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
            <Footer />
          </div>
        </motion.div>
      </motion.div>
    </Wrapper>
  );
};
