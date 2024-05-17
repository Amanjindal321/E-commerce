import React from 'react'
import Banner from '../../assets/footpattern1.jpg';
import footerlogo from '../../assets/logo.png';
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileButton} from 'react-icons/fa6';


const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundSize: 'cover',
  backgroundPosition: 'bottom',
  backgroundRepeat: 'no-repeat',
  height: "100%",
  width: "100%",
}

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#",
  },
  {
    title: "Contact",
    link: "/#",
  },
  {
    title: "Blog",
    link: "/#",
  },
]
const Footer = () => {
  return (
    <div style={BannerImg}
    className='text-white mb-20'>
      <div className='container'>
        <div data-aos="zoom-in" className='grid md:grid-cols-3 pb-44 pt-9'>
          {/* company details */}
          <div className='py-16 px-6'>
            {/* <h1 className='
            sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3'>
              Flipkart
            </h1> */}
              <img src={footerlogo} alt='' 
              className='max-w-[200px]'/>
              
            
            <p># 2001-2024 Flipkart.com</p>
          </div>
          {/* Footer Links */}
            <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
              <div>
                <div className='py-8 px-4'>
                  <h1
                  className='sm:text-2xl text-xl font-bold sm:text-left text-justify mb-3'>
                    Important Links
                  </h1>
                  <ul className='flex flex-col gap-3'>
                    {FooterLinks.map((link) => (
                      <li 
                      className='cursor-pointer
                      hover:text-brand-green
                      hover:translate-x-1 duration-300
                      text-gray-200' 
                      key={link.title}
                      >
                      
                      <span>{link.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* social link */}
              <div>
                <div className='flex items-center gap-3 mt-6'>
                  <a href="#">
                  <FaInstagram className='text-3xl' />
                  </a>
                  <a href='#'>
                  <FaFacebook className='text-3xl' />
                  </a>
                  <a href='#'>
                    <FaLinkedin className='text-3xl' />
                  </a>
                </div>
                <div className='mt-7 '>
                  <div className='flex items-center gap-3'>
                    <FaLocationArrow className='text-3xl' />
                    <p>Mohali, India</p>
                  </div>
                  <div className='flex items-center gap-3 mt-3 '>
                    <FaMobileButton />
                    <p>91+ 99999999</p>
                  </div>
                </div>
              </div>
            </div>
       </div>
      </div>
    </div>
  )
}

export default Footer;