import React from 'react'
import Slider from 'react-slick';

const testimonialData = [
    {
        id: 1,
        name: "Srikanth Sir",
        text: "Great experience with this website.The product quality is consistently outstanding, exceeding my expectations every time. I will definitely order from this site again.",
        img: "https://picsum.photos/103/103",
    },
    {
        id: 2,
        name: "Srikanth Sir",
        text: "I really like the products. I love the delivery.The product quality is consistently outstanding, exceeding my expectations every time. I will definitely order from this site again.",
        img: "https://picsum.photos/104/104",
    },
    {
        id: 3,
        name: "Amitabh Bachchan",
        text: "I really like the products. I love the delivery.The product quality is consistently outstanding, exceeding my expectations every time. I will definitely order from this site again.",
        img: "https://picsum.photos/105/105",
    },
    {
        id: 4,
        name: "Sehwag",
        text: "I really like the products. I love the delivery.The product quality is consistently outstanding, exceeding my expectations every time. I will definitely order from this site again.",
        img: "https://picsum.photos/106/106",
    },
    {
        id: 5,
        name: "Sachin Tendulkar",
        text: "I really like the products. I love the delivery.The product quality is consistently outstanding, exceeding my expectations every time. I will definitely order from this site again.",
        img: "https://picsum.photos/107/107",
    },
];

const Testimonials = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        autoplayshow: true,
        arrows: false,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        
        responsive: [
            {
              breakpoint: 10000,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              },
            },
        ],
    };
  return (
    <div className='py-10 mb-10'>
        <div className='container'>
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
              <p data-aos="fade-up" className='text-sm text-black-900 font-medium'>What our customers saying</p>
              <h1 data-aos="fade-up" className='text-3xl font-bold'>Testimonials</h1>
              <p data-aos="fade-up" className='text-xs text-gray-900'>
                Customer Satisfaction is our priority
              </p>  
            </div>

            {/* Testimonial cards */}
            <div data-aos="zoom-in">
                <Slider {...settings}>
                    {testimonialData.map((data) => (
                        <div className='my-6'>

                        <div 
                        key={data.id}
                        className='flex flex-col gap-4 shadow-lg py-8 px-6 mg-4 rounded-xl rounded-xl dark:bg-gray-800 bg-yellow-100 relative'>
                        <div className='mb-4'>
                            <img src={data.img} alt="" className='rounded-full w-20 h-20'/>
                        </div>
                        <div className='flex flex-col items-center gap-4'>
                            <div className='space-y-3'>
                            <p className='text-xs text-gray-600'>{data.text}</p>
                            <h1 className='text-xl font-bold text-black/80 dark:text-light'>{data.name}</h1>
                            </div>
                          </div>
                         

                            {/* p tag */}

                          </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Testimonials