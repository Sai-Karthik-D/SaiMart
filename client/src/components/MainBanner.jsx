import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import { categories } from '../assets/assets';

const MainBanner = () => {
  return (
    <div className='relative h-[50vh] md:h-[60vh] w-full'>
      <img
        src={assets.MB}
        alt="Main-Banner"
        className='w-full h-full hidden md:block object-cover'
      />

     
      <img
        src={assets.MB}
        alt="Main-Banner"
        className='w-full h-full md:hidden object-cover'
      />

      
      <div className='absolute inset-0 flex justify-center items-center px-4 md:px-8 lg:px-16'>
        <div className='max-w-7xl w-full flex flex-col justify-center items-center md:items-start h-full'>
          <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold text-green-800 drop-shadow-lg text-center md:text-left max-w-3xl leading-tight mb-4 md:mb-6'>
            EAT HEALTHY AND STAY HEALTHY
          </h1>

          <div className='flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4'>
            <Link
              to="/products"
              className='group flex items-center gap-2 px-6 md:px-9 py-2.5 md:py-3 bg-primary hover:bg-primary-dull transition rounded text-white cursor-pointer text-sm md:text-base'
            >
              Shop now
            </Link>

            <Link
              to="/products"
              className='group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer text-black text-base'
            >
              Explore Deals
            </Link>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default MainBanner;