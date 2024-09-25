import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Wrapper } from "../layout/Wrapper";
import { Button } from "../ui/Button";

export const FounderBioSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("founder-bio");
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
    <Wrapper bgColor='bg-primary-purple-gray'>
      <motion.div
        id='founder-bio'
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className='px-[46px] lg:px-[100px] pt-[85px] pb-[55px]'
      >
        <div className='flex items-center justify-center lg:justify-end lg:w-[68%]'>
          <h3 className='text-secondary-blue font-normal text-3xl mb-16 lg:mb-12'>
            Be your best self.
          </h3>
        </div>
        <div className='flex flex-col lg:flex-row items-center justify-between w-full'>
          <aside className='relative sm:w-[500px] md:w-[600px] h-[380px] lg:h-[665px]'>
            <div className='relative flex justify-center'>
              <img
                src='https://res.cloudinary.com/dudiful8w/image/upload/v1727015946/Group_4535_lajjoy.jpg'
                alt='Image 1'
                className={`absolute top-[-50px] left-[-25px] sm:left-[55px] md:left-[105px] w-[100px] h-[107px] 
                    lg:w-[165px] lg:h-[175px] lg:top-[-80px] lg:left-[40px] object-cover`}
              />
              <img
                src='https://res.cloudinary.com/dudiful8w/image/upload/fl_preserve_transparency/v1727015946/Group_4445_hx4ycn.jpg?_s=public-apps'
                alt='Main Image'
                className='h-[310px] lg:h-[570px] w-[300px] lg:w-[380px] object-cover'
              />
              <img
                src='https://res.cloudinary.com/dudiful8w/image/upload/v1727071330/Rectangle_799_jlobqd.png'
                alt='Image 3'
                className={`absolute bottom-[-50px] right-[-25px] sm:right-[55px] md:right-[105px] w-[100px] 
                    h-[107px] lg:w-[165px] lg:h-[175px] lg:bottom-[-80px] lg:right-[40px] object-cover`}
              />
            </div>
          </aside>

          <motion.div
            className='w-full lg:w-[50%] flex justify-center flex-col gap-4'
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className='text-secondary-gray text-base font-normal'>
              Hi! My name’s John Dou, and I founded basslines in 2024.
            </p>
            <p className='text-secondary-gray text-base font-normal'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
              felis finibus consequat.
            </p>
            <p className='text-secondary-gray text-base font-normal'>
              Fusce non nibh luctus, dignissim risus quis, bibendum dolor. Donec
              placerat volutpat ligula, ac consectetur felis varius non. Aliquam
              a nunc rutrum, porttitor dolor eu, pellentesque est. Vivamus id
              arcu congue, faucibus libero nec, placerat ligula.
            </p>
            <p className='text-secondary-gray text-base font-normal'>
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Sed eu nisl a metus ultrices sodales.
            </p>
            <p className='text-secondary-gray text-base font-normal'>
              Fusce non ante velit. Sed auctor odio eu semper molestie. Nam
              mattis, sapien eget lobortis fringilla, eros ipsum tristique
              tellus, ac convallis urna massa at nibh.
            </p>
            <p className='text-secondary-gray text-base font-normal'>
              Duis non fermentum augue. Vivamus laoreet aliquam risus, sed
              euismod leo aliquam ut. Vivamus in felis eu lacus feugiat aliquam
              nec in sapien.
            </p>
            <p className='text-secondary-gray text-base font-normal'>
              Cras mattis varius mollis.
            </p>
            <div className='mt-[30px] hidden'>
              <Button />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Wrapper>
  );
};
