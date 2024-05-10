import React, { useRef } from 'react'
import Image1 from '../../assets/shopping.png'
import Image2 from '../../assets/women.png'
import Image3 from '../../assets/sale.png'
import Slider from "react-slick"

const ImageList = [
    {
        id: 1,
        img: Image1,
        title: 'Up to 50% off on all products',
        description: 'Shop now and get up to 50% off on all products.',
    },
    {
      id: 2,
      img: Image2,
      title: 'Up to 60% off on all products',
      description: 'Shop now and get up to 50% off on all products.',
    },
    {
      id: 3,
      img: Image3,
      title: 'Up to 60% off on all products',
      description: 'Shop now and get up to 50% off on all products.',
    },
]
const Hero = () => {
  const sliderRef =useRef(null);

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };


  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayshow: true,
    arrows: false,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[540px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
        {/* background pattern */}
        <div className='h-[700px] w-[700px] bg-secondary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'>
            
        </div>
        {/* hero section */}
        <div className='container pb-8 sm:pb-0 '>
          <Slider {...settings} ref={sliderRef}>
            {ImageList.map((data) => (
              <div>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
          {/* text content section */}
          <div className='flex flex-col justify-center items-center gap-4 pt-10
          sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>

        <h1 
          data-aos="zoom-out"
          data-aos-once="true"
          data-aos-duration="500" 
          className='text-5xl sm:text-6xl lg:text-4xl font-bold'>{data.title}</h1>
        <p 
          data-aos="zoom-out"
          data-aos-duration="500"
          data-aos-delay="200"
          className='text-sm'
        >
          {data.description}
        </p>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="300"
        >
          <button className='bg-black text-white py-2 px-4 hover:bg-gray-500 duration-200 text-white py-2 px-4 rounded-full'>
            Shop Now
          </button>
        </div>
      </div>
      {/* Image section */}
      <div className='order-1 sm:order-2'>
        <div
         data-aos="zoom-in"
         data-aos-once="true"
         className='relative z-10'
         >
          <img src={data.img} alt="" className='w-[400px] h-[300px] sm:h-
          [450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-cover mx-auto'/>
        </div>
      </div>
            </div>
          </div>
          ))}
        </Slider>
        <div className='flex justify-center mt-4'>
          {/* <button onClick={handlePrev} className='bg-black text-white py-2 px-4 hover:bg-gray-500 duration-200 text-white py-2 px-4 rounded-full mr-4 '>
            Prev
          </button>
          <button onClick={handleNext} className='bg-black text-white py-2 px-4 hover:bg-gray-500 duration-200 text-white py-2 px-4 rounded-full'>
            Next
          </button> */}

        </div>
        </div>
    </div>
  );
};

export default Hero