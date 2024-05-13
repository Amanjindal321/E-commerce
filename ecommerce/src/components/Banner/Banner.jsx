import React from 'react'
import BannerImg from '../../assets/banner.jpg';



const Banner = () => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-12 sm:py-0'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center'>
                <div data-aos="zoom-in">
                {/* image section */}
                <img src={BannerImg} alt="" className='max-w-[490px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover'/>
                </div>
                {/* text detail section */}
                <div>
                    <h1 className='font-bold '>Winter Sale upto 50% off</h1>
                    <p>SALE...SALE...SALE...SALE...!!!!!!!!!</p>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Banner