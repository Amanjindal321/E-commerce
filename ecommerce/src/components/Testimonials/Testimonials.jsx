import React from 'react'
import Slider from 'react-slick';

const testimonialData = [
    {
        id: 1,
        name: "John Doe",
        text: "Great experience with this website. I love the products and the delivery. I will definitely order from this site again.",
        img: "https://picsum.photos/103/103",
    },
    {
        id: 2,
        name: "Jane Doe",
        text: "I really like the products. I love the delivery. I will definitely order from this site again.",
        img: "https://picsum.photos/104/104",
    },
    {
        id: 3,
        name: "John Smith",
        text: "I really like the products. I love the delivery. I will definitely order from this site again.",
        img: "https://picsum.photos/105/105",
    },
    {
        id: 4,
        name: "Jane Smith",
        text: "I really like the products. I love the delivery. I will definitely order from this site again.",
        img: "https://picsum.photos/106/106",
    },
    {
        id: 5,
        name: "John Smith",
        text: "I really like the products. I love the delivery. I will definitely order from this site again.",
        img: "https://picsum.photos/107/107",
    },
];

const Testimonials = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        //slidesToShow: 3,
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
            <div>
                <Slider {...settings}>
                    {testimonialData.map((data) => (
                        <div 
                        key={data.id}
                        className='flex flex-col gap-4 shadow-lg py-8 px-6 mg-4 rounded-xl'>
                        <div>
                            <img src={data.img} alt="" className='rounded-full w-20 h-20'/>
                        </div>
                        <div>
                            <p>{data.text}</p>
                            <h1>{data.name}</h1>
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