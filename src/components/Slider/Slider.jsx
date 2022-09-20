import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Placat from '../Badge/Placat';
import Slidercart from '../../atoms/Slider/Slidercart';
import slide1 from '../../assets/images/slide1.png';
import slide2 from '../../assets/images/slide2.png';
import slide3 from '../../assets/images/slide3.png';

function Slider() {
  return (
    <div className='sm:h-[220px] md:h-[400px] sm:full md:mx-0 flex md:flex-row sm:flex-col relative sm:top-0 md:top-1
      md:mt-0 sm:mt-4 md:w-full '>
      <Carousel showThumbs={false} autoPlay={true} dynamicHeight={true} interval={3000} transitionTime={1000} autoFocus={true} className='lg:w-[70%] md:w-full sm:w-full'>
        <Slidercart url={slide3} />
        <Slidercart url={slide2} />
        <Slidercart url={slide1} />
      </Carousel>
      <Placat />
    </div>
  )
}

export default React.memo(Slider);
