import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import bannerDesktop1 from '../../assets/svg/banner - desktop1.svg';
import bannerDesktop2 from '../../assets/svg/banner - desktop2.svg';
import bannerDesktop3 from '../../assets/svg/banner - desktop3.svg';
import bannerMobile1 from '../../assets/svg/banner - mobile1.svg';
import bannerMobile2 from '../../assets/svg/banner - mobile2.svg';
import bannerMobile3 from '../../assets/svg/banner - mobile3.svg';

const Banner = () => {
  const imagesDesktop = [bannerDesktop1, bannerDesktop2, bannerDesktop3];
  const imagesMobile = [bannerMobile1, bannerMobile2, bannerMobile3];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesDesktop.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [imagesDesktop]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesMobile.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [imagesMobile]);

  return (
    <div className="relative">
      <div className="hidden md:flex justify-center items-center">
        {imagesDesktop.map((image, index) => (
          <div
            key={index}
            className={`transition-opacity duration-1000 ${currentImageIndex === index ? 'opacity-100' : 'opacity-0'}`}
          >
            {currentImageIndex === index && <Image src={image} alt={`Banner${index + 1}`} />}
          </div>
        ))}
      </div>

      <div className="md:hidden flex justify-center items-center">
        {imagesMobile.map((image, index) => (
          <div
            key={index}
            className={`transition-opacity duration-1000 ${currentImageIndex === index ? 'opacity-100' : 'opacity-0'}`}
          >
            {currentImageIndex === index && <Image src={image} alt={`Banner${index + 1}`} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
