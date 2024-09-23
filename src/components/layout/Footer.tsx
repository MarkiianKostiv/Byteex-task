import { Icon } from "../ui/Icon";

export const Footer = () => {
  return (
    <div className='w-full flex items-center justify-center mt-6 pt-[85px] gap-6'>
      <div className='flex w-[300px] items-center justify-center gap-3 border-r-2 pr-5 border-r-[rgba(196,196,196,0.5)]'>
        <div className='flex items-center justify-center bg-[rgba(102,102,102,0.1)] p-2 rounded-full'>
          <Icon
            name='truck'
            strokeColor='rgb(103, 104, 105)'
          />
        </div>
        <p className='text-primary-gray font-normal text-xl'>
          FREE Shipping on Orders over $200
        </p>
      </div>
      <div className='flex w-[300px] items-center justify-center gap-3 border-r-2 pr-5 border-r-[rgba(196,196,196,0.5)]'>
        <div className='flex items-center justify-center bg-[rgba(102,102,102,0.1)] p-2 rounded-full'>
          <Icon
            name='checked'
            strokeColor='rgb(103, 104, 105)'
          />
        </div>
        <p className='text-primary-gray font-normal text-xl'>
          Over 500+ 5 Star Reviews Online
        </p>
      </div>
      <div className='flex w-[300px] items-center justify-center gap-3 border-r-2'>
        <div className='flex items-center justify-center bg-[rgba(102,102,102,0.1)] p-2 rounded-full'>
          <Icon
            name='cart'
            strokeColor='rgb(103, 104, 105)'
          />
        </div>
        <p className='text-primary-gray font-normal text-xl'>
          Made ethically and responsibly.
        </p>
      </div>
    </div>
  );
};
