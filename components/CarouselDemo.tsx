  import React, { useState } from "react";
  import Image from 'next/image';
  import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

  const images = [
    '/announcement1.jpeg',
    '/announcement2.jpeg',
    '/announcement3.jpeg',
    '/announcement4.jpeg',
    '/announcement5.jpeg'
  ];

  export function CarouselDemo() {
    const [currentImage, setCurrentImage] = useState(0);

    const handleNext = () => setCurrentImage((currentImage + 1) % images.length);

    const handlePrevious = () =>
      setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);

    return (
      <Carousel>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className={index === currentImage ? 'block' : 'hidden'}>
              <div className="p-1">
                <div className="w-screen relative">
                  <Image
                    src={image} 
                    alt="meow"
                    layout="fill"
                    objectFit="cover"
                    className="absolute top-0 left-0 w-full h-full"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious onClick={handlePrevious} />
        <CarouselNext onClick={handleNext} />
      </Carousel>
    );
  }
