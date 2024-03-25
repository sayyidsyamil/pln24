import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const NextJsCarousel = () => {
  return (
    <div className='flex justify-center items-center text-center' >
      <Carousel className='w-[100%] md:w-[70%] overflow-clip'>

        <div className="aspect-video bg-black">
          <img src="/announcement2.png" alt="image1" className="w-full h-full object-contain" />
        </div>
        <div className="aspect-video bg-black">
          <img src="/announcement3.png" alt="image3" className="w-full h-full object-contain" />
        </div>
        <div className="aspect-video bg-black">
          <img src="/announcement4.png" alt="image4" className="w-full h-full object-contain" />
        </div>
      </Carousel >
    </div >
  );
};

export default NextJsCarousel;
