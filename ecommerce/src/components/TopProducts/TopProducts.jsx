import React from 'react'
import Img1 from '../../assets/shirt1.png';
import Img2 from '../../assets/shirt3.png';
import Img3 from '../../assets/shirt2.png';

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Casual Wears",
        description: "Off on Casual wears", 
    },
    {
        id: 2,
        img: Img2,
        title: "Casual Wears",
        description: "Off on Casual wears",
    },
    {
        id: 3,
        img: Img3,
        title: "Casual Wears",
        description: "Off on Casual wears",
    
    },
]
const TopProducts = () => {
  return (
    <div>
        <div className='container'>
            {/* Header section */}
            <div className='text-left mb-24'>
              <p data-aos="fade-up" className='text-sm text-brand-green '>
                Top Rated Products for you
              </p>
              <h1 data-aos="fade-up" className='text-3xl font-bold'>
                Best Products
              </h1>
              <p data-aos="fade-up" className='text-xs text-gray-400 mb-2'>
                Up to 50% off on all products
              </p>
            </div>
            {/* Body section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
                {ProductsData.map((data) => (
                        <div className='rounded-2xl bg-gray-100 dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-gray-900 hover:text-white relative shadow-xl duration-300 group max-w-[300px]'> 
                            {/* image section */}
                            <div className='h-[100px]'>
                                <img src={data.img} alt="" className='max-w-[140px] mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md'/>
                            </div>
                            {/* text section */}
                            {/* <div>
                                <h1>{data.title}</h1>
                                <p>{data.description}</p>
                            </div> */}
                        </div>
                    ))}
            </div>
        </div>
    </div>
  )
}

export default TopProducts