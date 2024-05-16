import React from 'react';

import Img1 from '../../assets/women1.jpg';
import Img2 from '../../assets/men2.jpg';
import Img3 from '../../assets/women2.jpg';
import Img4 from '../../assets/men3.jpg';
import Img5 from '../../assets/women3.jpg';
import { FaStar } from 'react-icons/fa6';

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Goggles",
        rating: 4.7,
        color: "brown",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: "Shopping",
        rating: 4.5,
        color: "brown",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img3,
        title: "Summer wear",
        rating: 4.7,
        color: "brown",
        aosDelay: "200",
    },
    {
        id: 4,
        img: Img4,
        title: "Sunglasses",
        rating: 4.7,
        color: "brown",
        aosDelay: "0",
    },
    {
        id: 5,
        img: Img5,
        title: "Collection",
        rating: 4.7,
        color: "brown",
        aosDelay: "200",
    },
];

const Products = () => {
  return (
    <div className='mt-14 mb-12'>
        <div className='container'>
            {/* Header section */}
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
              <p data-aos="fade-up" className='text-sm text-black-900 font-medium'>Top Selling Products for you</p>
              <h1 data-aos="fade-up" className='text-3xl font-bold'>Top Products</h1>
              <p data-aos="fade-up" className='text-xs text-gray-900'>
                Up to 50% off on all products
              </p>  
            </div>
            
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-6'>
                
                {
                    ProductsData.map((data) => (
                        <div data-aos="fade-up"
                         data-aos-delay={data.aosDelay}
                         key={data.id}
                         className='space-y-3'
                         >
                            <img src={data.img} alt=""
                            className='h-[220px] w-[750px] object-cover rounded-md' />
                            <div>
                                <h3 className='font-semibold'>{data.title}</h3>
                                <p className='text-sm text-gray-900'>{data.color}</p>
                                <div className='flex items-center gap-1'>
                                    <FaStar className='text-yellow-500'/>
                                    <span>{data.rating}</span>
                                </div>
                            </div>
                        </div>
                ))}
                </div>
                <div className='flex justify-center'>
                    <button className='text-center mt-10 cursor-pointer bg-yellow-500 text-white px-4 py-2 rounded-md'>View All Products</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products