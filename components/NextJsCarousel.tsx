import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';

const NextJsCarousel = () => {
  return (
    <div className='flex justify-center items-center text-center'>
      <Carousel className='max-w-screen-lg w-full overflow-hidden'>
        <div className="aspect-video bg-black">
          <Image src="/announcement3.png" alt="image1" width={1980} height={1080} className="w-full h-full object-contain" />
        </div>
        <div className="aspect-video bg-black">
          <Image src="/announcement1.PNG" alt="image1" width={1980} height={1080} className="w-full h-full object-contain" />
        </div>
        <div className="aspect-video bg-black">
          <Image src="/announcement2.PNG" alt="image2" width={1980} height={1080} className="w-full h-full object-contain" />
        </div>
      </Carousel >
    </div >
  );
};

export default NextJsCarousel;
