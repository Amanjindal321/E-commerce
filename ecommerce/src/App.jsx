import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import TopProducts from './components/TopProducts/TopProducts';
import Banner from './components/Banner/Banner';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Testimonials from './components/Testimonials/Testimonials';
import Subscribe from './components/Subscribe/Subscribe';
import Footer from './components/Footer/Footer';

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration:800,
      easing: 'ease-in-out',
      delay: 100,
    });
  }, []);

  return <div>
      <Navbar />
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
      <Subscribe />
      <Testimonials />
      <Products />
      <Footer />
    </div>;
  
};

export default App